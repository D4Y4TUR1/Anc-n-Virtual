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
    },

    'QR1RIyn1bLmNerdxoMLT':{
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
    },
}

export default Scene;