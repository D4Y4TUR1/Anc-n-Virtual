import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, doc, updateDoc, increment } from "firebase/firestore";
import defaultAvatar from "../assets/defaultAvatar.png";
import "./SubComments.css";

const SubComments = ({ destinationId, commentId, currentUser }) => {
    const [subComments, setSubComments] = useState([]);
    const [newSubComment, setNewSubComment] = useState("");
    const db = getFirestore();

    useEffect(() => {
        const fetchSubComments = async () => {
            const subcommentsRef = collection(
                db,
                `destinoTuristico/${destinationId}/comentarios/${commentId}/subcomentarios`
            );
            const snapshot = await getDocs(subcommentsRef);
            const loadedSubComments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            loadedSubComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setSubComments(loadedSubComments);
        };

        fetchSubComments();
    }, [db, destinationId, commentId]);

    const handleSubCommentSubmit = async (e) => {
        e.preventDefault();
    
        if (!currentUser || newSubComment.trim() === "") return;
    
        const subCommentData = {
            text: newSubComment,
            userEmail: currentUser.email,
            userPhoto: currentUser.photoURL || "https://via.placeholder.com/50",
            userId: currentUser.uid,
            createdAt: serverTimestamp(),
        };
    
        try {
            const subcommentsRef = collection(
                db,
                `destinoTuristico/${destinationId}/comentarios/${commentId}/subcomentarios`
            );
            await addDoc(subcommentsRef, subCommentData);
    
            // Incrementar los puntos del usuario en Firestore
            const userRef = doc(db, "usuarios", currentUser.uid);
            await updateDoc(userRef, { points: increment(2) }); // Incrementar 2 puntos
    
            // Refrescar la lista de subcomentarios
            setNewSubComment(""); // Limpiar el campo de texto
            const snapshot = await getDocs(subcommentsRef);
            const loadedSubComments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            loadedSubComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setSubComments(loadedSubComments);
        } catch (error) {
            console.error("Error al agregar subcomentario:", error);
        }
    };
    
    return (
        <div className="subcomments-container">
            {subComments.map((subComment) => (
                <div key={subComment.id} className="subcomment">
                    <div className="subcomment-header">
                        <img
                            src={defaultAvatar || subComment.userPhoto}
                            alt="Avatar"
                            className="subcomment-avatar"
                        />
                        <div className="subcomment-details">
                            <strong>{subComment.userEmail}</strong>
                            <small>
                                {subComment.createdAt && subComment.createdAt.seconds
                                    ? new Date(subComment.createdAt.seconds * 1000).toLocaleString()
                                    : "Ahora mismo"}
                            </small>

                        </div>
                    </div>
                    <p>{subComment.text}</p>
                </div>
            ))}

            <form className="subcomment-form" onSubmit={handleSubCommentSubmit}>
                <textarea
                    placeholder="Escribe tu respuesta..."
                    value={newSubComment}
                    onChange={(e) => setNewSubComment(e.target.value)}
                    rows="2"
                    disabled={!currentUser}
                ></textarea>
                <button type="submit" disabled={!currentUser || newSubComment.trim() === ""}>
                    Responder
                </button>
            </form>
        </div>
    );
};

export default SubComments;
