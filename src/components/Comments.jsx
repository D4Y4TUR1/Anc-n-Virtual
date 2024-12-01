import React, { useState, useEffect } from "react";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    increment,
    serverTimestamp,
} from "firebase/firestore";
import defaultAvatar from "../assets/defaultAvatar.png";
import "./Comments.css";
import SubComments from "./SubComments"; // Importamos el nuevo componente

const Comments = ({ destinationId, currentUser }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [replyCommentId, setReplyCommentId] = useState(null); // Para manejar respuestas

    const db = getFirestore();

    useEffect(() => {
        const fetchComments = async () => {
            if (!destinationId) return;

            const commentsRef = collection(db, `destinoTuristico/${destinationId}/comentarios`);
            const snapshot = await getDocs(commentsRef);
            const loadedComments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            // Ordenar por fecha
            loadedComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setComments(loadedComments);
        };

        fetchComments();
    }, [destinationId, db]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        if (!currentUser || newComment.trim() === "") return;

        const commentData = {
            text: newComment,
            userEmail: currentUser.email,
            userPhoto: currentUser.photoURL || "https://via.placeholder.com/50",
            userId: currentUser.uid,
            createdAt: serverTimestamp(),
        };

        try {
            const commentsRef = collection(db, `destinoTuristico/${destinationId}/comentarios`);
            if (replyCommentId) {
                // Guardar subcomentario en la subcolección
                const subcommentsRef = collection(
                    db,
                    `destinoTuristico/${destinationId}/comentarios/${replyCommentId}/subcomentarios`
                );
                await addDoc(subcommentsRef, commentData);
            } else {
                // Guardar comentario principal
                await addDoc(commentsRef, commentData);
            }

            // Incrementar los puntos del usuario en Firestore
            const userRef = doc(db, "usuarios", currentUser.uid);
            await updateDoc(userRef, { points: increment(5) });

            // Refrescar los comentarios
            setNewComment("");
            setReplyCommentId(null);
            const snapshot = await getDocs(commentsRef);
            const loadedComments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            loadedComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setComments(loadedComments);
        } catch (error) {
            console.error("Error al agregar comentario o subcomentario:", error);
        }
    };

    const renderComments = () => {
        return comments.map((comment) => (
            <div key={comment.id} className="comment">
                <div className="comment-header">
                    <img
                        src={defaultAvatar || comment.userPhoto}
                        alt="Avatar"
                        className="comment-avatar"
                    />
                    <div className="comment-details">
                        <strong>{comment.userEmail}</strong>
                        <small>
                            {comment.createdAt && comment.createdAt.seconds
                                ? new Date(comment.createdAt.seconds * 1000).toLocaleString()
                                : "Ahora mismo"}
                        </small>

                    </div>
                </div>
                <p>{comment.text}</p>
                <button
                    className="reply-button"
                    onClick={() => setReplyCommentId(comment.id)}
                >
                    Responder
                </button>
                {/* Renderizar subcomentarios */}
                <SubComments
                    destinationId={destinationId}
                    commentId={comment.id}
                    currentUser={currentUser}
                />
            </div>
        ));
    };

    return (
        <div className="comments-container">
            <h2>Comentarios</h2>

            <div className="comments-section">{renderComments()}</div>

            <form className="comment-form" onSubmit={handleCommentSubmit}>
                {replyCommentId && (
                    <p className="replying-to">
                        Respondiendo a un comentario{" "}
                        <button onClick={() => setReplyCommentId(null)}>Cancelar</button>
                    </p>
                )}
                <textarea
                    placeholder="Escribe tu comentario..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows="3"
                    disabled={!currentUser}
                ></textarea>
                <button type="submit" disabled={!currentUser || newComment.trim() === ""}>
                    {currentUser ? "Comentar" : "Inicia sesión para comentar"}
                </button>
            </form>
        </div>
    );
};

export default Comments;
