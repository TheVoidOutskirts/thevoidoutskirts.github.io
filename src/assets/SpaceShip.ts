export {spaceShip}

const spaceShip = [
    {
        nome: "Spacca-Stelle I",
        classe: "Stardestroyer",
        armi: ["Lsr","knt"],
        piantaNave: 'http://localhost:8000/testimage.png'
    },
    {
        nome: "Curiosity",
        classe: "Science-Ship",
        armi: ["PDC"],
        piantaNave: 'http://localhost:8000/testimage2.png'
    }
]

const stanze = [
    {
        reattore:{
            colore: "red",
            resistenza: 5,
            importanza: "elevata"
        }
    },
    {
        controll: {
            perforante: [1,1],
            esplosivo:  [1,1]
        },
    }
]