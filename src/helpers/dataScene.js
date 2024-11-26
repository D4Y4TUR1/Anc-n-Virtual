// src/helpers/dataScene.js
    const Scene = {
        'YFdnQDhJ3kGyyDXx5Ray':{
            insideMain: {
                narration: 'Bienvenidos a la Iglesia de San Pedro de Ancón. La Iglesia de San Pedro de Ancón es uno de los principales símbolos religiosos e históricos del distrito. ',
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                narration: 'Antes de entrar al salón que lleva al campanario, encontramos las estatuas de San Martín de Porres y Santa Rosa de Lima, dos de los santos más venerados en Perú. San Martín, conocido por su humildad y servicio, y Santa Rosa, famosa por su devoción y sacrificio, son figuras protectoras y símbolos de fe para la comunidad. Aunque San Pedro es el patrono de Ancón, estos santos acompañan y bendicen a cada visitante que cruza este umbral, recordándonos los valores de la compasión y la espiritualidad.',
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                narration: 'Aquí, junto a la entrada al salón del confesionario, encontramos una estatua del Señor Cautivo de Ayabaca, una imagen profundamente venerada en el norte de Perú. Este Cristo es conocido por su sufrimiento y su capacidad de sanar y proteger a quienes vienen a él con fe. La presencia de esta estatua en nuestra iglesia ofrece a los fieles un lugar para pedir consuelo y fortaleza en momentos difíciles. Antes de entrar al confesionario, muchos fieles rezan aquí, buscando la intercesión del Señor Cautivo para hallar paz y redención en el sacramento de la confesión.',
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                narration: 'Este es el puesto de venta de comidas marinas, ganadores de premios.',
                hotSpots: {
                }
            },
            insideFour: {
                narration: 'Estás en la Bahia donde se realizan paseos.',
                hotSpots: {
                }
            },
        
            insideFinal: {
                narration: 'ste es el presbiterio, el espacio sagrado donde se encuentra el altar principal de la Iglesia de San Pedro de Ancón. Aquí es donde se realizan las ceremonias más importantes, como la misa, los bautizos y las bodas. El altar está dedicado a San Pedro, el patrono de los pescadores, en honor a la tradición marinera de Ancón. Este lugar simboliza la conexión entre Dios y los fieles; es aquí donde el sacerdote oficia la Eucaristía, transformando el pan y el vino en el Cuerpo y la Sangre de Cristo, un acto central en la fe católica. El presbiterio, sencillo y sin excesos, permite que la atención esté puesta en la espiritualidad y la unión con Dios, invitando a la comunidad a participar plenamente en la liturgia y en sus tradiciones religiosas',
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point0: { type: 'custom',pitch: 95, yaw: 52.5, cssClass: 'moveScene', scene: 'insideMain', },
                    Point1: { type: 'custom',pitch: 90, yaw: 41.5, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 90, yaw: 64, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 15, yaw: 52.5, cssClass: 'moveScene', scene: 'insideFinal', },
                },
            },

        },

        'QR1RIyn1bLmNerdxoMLT':{
            insideMain: {
                narration: 'Bienvenidos a la entrada del muelle de Ancón, un lugar lleno de historia y tradición pesquera. Este muelle no solo es el punto de partida para quienes se dedican a la pesca, sino también un sitio emblemático que conecta a los visitantes con el espíritu marítimo de Ancón. Desde aquí, pueden observar las pequeñas embarcaciones de pescadores que salen cada mañana y regresan al atardecer cargadas de pescado fresco, una actividad que ha sido el sustento de muchas familias anconeras por generaciones.',
                hotSpots: {
                    PuestoVentas: {
                        type: 'custom',
                        pitch: 1.58,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                }
            },
            insideOne: {
                narration: 'Cerca de la entrada del muelle, encontramos un pequeño mercado donde los pescadores de Ancón venden directamente el pescado que capturan cada día. Este sitio es un lugar auténtico y lleno de vida, donde puedes ver el trabajo arduo de los pescadores y sentir la frescura del mar en cada producto que ofrecen. Desde tempranas horas de la mañana, ellos traen su pesca y la venden directamente a la comunidad y a los visitantes. Aquí puedes encontrar una variedad de pescados y mariscos frescos, como la caballa, el pejerrey, y otros frutos del mar que forman parte de la dieta local.',
                hotSpots: {
                    entrada: {
                        type: 'custom',
                        pitch: 2.49,
                        yaw: 70.47,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Plaza: {
                        type: 'custom',
                        pitch: -0.94,
                        yaw: 166.27,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Cevicheras: {
                        type: 'custom',
                        pitch: 1.17,
                        yaw: -168.27,
                        cssClass: 'moveScene',
                        scene: 'insideThree',
                    }
                }
            },
            insideTwo: {
                narration: 'Entre las cevicheras y el muelle de Ancón hay una pequeña plaza circular, sencilla y sin mucha ornamentación. No es la plaza principal, pero este espacio circular, diseñado con un borde donde puedes sentarte, es un punto perfecto para hacer una pausa mientras disfrutas del ambiente costero. Aquí, los visitantes suelen detenerse para probar el ceviche o los mariscos que compran en las cevicheras cercanas, aprovechando la cercanía al muelle y las vistas al mar.',
                hotSpots: {
                    PuntoVenta: {
                        type: 'custom',
                        pitch: -0.36,
                        yaw: 28.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Cevicheras: {
                        type: 'custom',
                        pitch: 1.23,
                        yaw: -80.27,
                        cssClass: 'moveScene',
                        scene: 'insideThree',
                    },
                    Morro: {
                        type: 'custom',
                        pitch: 1.394,
                        yaw: -35.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                narration: 'Las cevicheras de Ancón están ubicadas a lo largo de la costa, cerca del muelle y del mercado de pescadores, lo que garantiza la frescura de sus productos. La mayoría se encuentra en las calles que rodean la playa principal y en el malecón, donde los visitantes pueden disfrutar de vistas directas al mar mientras degustan los sabores marinos. Este entorno costero permite que las cevicheras ofrezcan platos preparados al instante con pescado y mariscos recién traídos por los pescadores locales. Desde un ceviche clásico hasta el mixto y otros platos emblemáticos como el tiradito y los chicharrones, cada cevichera de Ancón brinda una experiencia culinaria auténtica y a pocos pasos del océano, lo que convierte a este balneario en un destino ideal para los amantes de la gastronomía marina peruana',
                hotSpots: {
                    PuntoVenta: {
                        type: 'custom',
                        pitch: 3.18,
                        yaw: -145.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Plaza: {
                        type: 'custom',
                        pitch: 1.16,
                        yaw: -92.55,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Bahia: {
                        type: 'custom',
                        pitch: 3.04,
                        yaw: 106.55,
                        cssClass: 'moveScene',
                        scene: 'insideFour',
                    },
                    Morro: {
                        type: 'custom',
                        pitch: 3.11,
                        yaw: 144.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                narration: 'En la parte de atrás del muelle de Ancón se encuentra el área destinada para los paseos en botes y lanchas, una de las actividades favoritas de los visitantes. Aquí puedes embarcarte en pequeños botes o lanchas que te llevan a recorrer la bahía de Ancón y explorar las cercanas islas y formaciones rocosas. Estos paseos son una excelente oportunidad para disfrutar de vistas panorámicas del balneario desde el mar, observar aves marinas y, con suerte, ver algunos lobos marinos en su hábitat natural.',
                hotSpots: {
                    Plaza: {
                        type: 'custom',
                        pitch: -0.94,
                        yaw: 166.27,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Morro: {
                        type: 'custom',
                        pitch: 4.173,
                        yaw: 109.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                narration: 'a vista del horizonte en Ancón es realmente cautivadora. Desde la costa, especialmente cerca del muelle, puedes observar el océano extendiéndose hasta donde alcanza la vista, creando una línea perfecta donde el mar se encuentra con el cielo. Este horizonte amplio y despejado es uno de los atractivos naturales más impresionantes del balneario, y en días despejados, el azul del mar se funde con el azul del cielo en una vista infinita que transmite paz y serenidad.',
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.43,
                        yaw: 170.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Bahia: {
                        type: 'custom',
                        pitch: 10.04,
                        yaw: -131.55,
                        cssClass: 'moveScene',
                        scene: 'insideFour',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point0: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    PointF: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideFinal', },
                },
            },
        },

        'iTz6iffyeKQdtBNF3hEv':{
            insideMain: {
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },
        },

        'wMUShknE4IVFkteK5w0n':{
            insideMain: {
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },
        },

        'wdP32h0MUyLazieMLnQQ':{
            insideMain: {
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },
        },

        'xKwd9H6umN44QHzZiFAr':{
            insideMain: {
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },
        },

        'yw7Kr09PeoYII837z1HU':{
            insideMain: {
                hotSpots: {
                    Cuadro: {
                        type: 'custom',
                        pitch: 38.11,
                        yaw: 82.11,
                        cssClass: 'hotspotElement',
                    },
                    Campanario: {
                        type: 'custom',
                        pitch: 10.46,
                        yaw: 45.18,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 9.08,
                        yaw: 135.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 11.89,
                        yaw: 84.89,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    },
                }
            },
            insideOne: {
                hotSpots: {
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.18,
                        yaw: -95.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -10.47,
                        yaw: -73.89,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 3.65,
                        yaw: -163.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideTwo: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideMain',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideThree: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
            insideFour: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2-4.44,
                        yaw: 90.77,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                    entrada: {
                        type: 'custom',
                        pitch: -5.87,
                        yaw: 48.56,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Presbiterio: {
                        type: 'custom',
                        pitch: 1.39,
                        yaw: 179.27,
                        cssClass: 'moveScene',
                        scene: 'insideFinal',
                    }
                }
            },
        
            insideFinal: {
                hotSpots: {
                    Campanario: {
                        type: 'custom',
                        pitch: 2.13,
                        yaw: -165.78,
                        cssClass: 'moveScene',
                        scene: 'insideOne',
                    },
                    Confesionario: {
                        type: 'custom',
                        pitch: 2.15,
                        yaw: 175.47,
                        cssClass: 'moveScene',
                        scene: 'insideTwo',
                    },
                }
            },

            mapView: {
                hotSpots: {
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },
        },
    }

    export default Scene;