// const curso = require('./curso.json')

const data = {
  "titulo": "Getting Started",
  "numVistas": 4200,
  "numLikes": 2000,
  "temas": [
    "JS",
    "Node.js"
  ],
  "esPublico": true
}

// Objeto -> cadena de caracteres
const dataJSON = JSON.stringify(data)

console.log(dataJSON)

// Cadena de caracteres -> Objeto
const dataObject = JSON.parse(dataJSON)
console.log(dataObject)