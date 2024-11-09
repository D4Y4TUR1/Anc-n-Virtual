// src/helpers/dataScene.js
/*export const tourMapping = {
    QR1RIyn1bLmNerdxoMLT: 'Tour1', // Mapea el ID "QR1RIyn1bLmNerdxoMLT" al nombre "Tour2"
    QR1RIyn2bLmNerdxoMLT: 'Tour2', // Mapea el ID "QR1RIyn1bLmNerdxoMLT" al nombre "Tour2"
    iTz6iffyeKQdtBNF3hEv: 'Tour3',
    wMUShknE4IVFkteK5w0n: 'Tour4',
    wdP32h0MUyLazieMLnQQ: 'Tour5',
    xKwd9H6umN44QHzZiFAr: 'Tour6',
    yw7Kr09PeoYII837z1HU: 'Tour7',
};
*/
    const Scene = {
        'YFdnQDhJ3kGyyDXx5Ray':{
            insideMain: {
                narration: 'Estás en la entrada principal.',
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
                narration: 'Estás en el puesto de venta de los productos marinos que pescan.',
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
                narration: 'Estás en la plaza del muelle.',
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
                narration: 'Estás en la Bahia donde se realizan paseos.',
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
                narration: 'Estás en el morro donde se pueden tener lindas vistas y donde se ven a los pescadores llegar.',
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
                    Point3: { type: 'custom',pitch: 15, yaw: 52.5, cssClass: 'moveScene', scene: 'insideThree', },
                },
            },

        },

        'QR1RIyn1bLmNerdxoMLT':{
            insideMain: {
                narration: 'Estás en la entrada principal.',
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
                narration: 'Estás en el puesto de venta de los productos marinos que pescan.',
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
                narration: 'Estás en la plaza del muelle.',
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
                narration: 'Este es el puesto de venta de comidas marinas, ganadores de premios.',
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
                narration: 'Estás en la Bahia donde se realizan paseos.',
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
                narration: 'Estás en el morro donde se pueden tener lindas vistas y donde se ven a los pescadores llegar.',
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
                    Point1: { type: 'custom',pitch: 10, yaw: 50, cssClass: 'moveScene', scene: 'insideOne', },
                    Point2: { type: 'custom',pitch: 10, yaw: 100, cssClass: 'moveScene', scene: 'insideTwo', },
                    Point3: { type: 'custom',pitch: 10, yaw: 150, cssClass: 'moveScene', scene: 'insideThree', },
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