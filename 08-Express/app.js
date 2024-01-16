const express = require('express')
const app = express()

const { infoCursos } = require('./cursos')

app.get('/', (req, res) => {
  res.send('Initialize server')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

app.get('/cursos/programacion', (req, res) => {
  res.send(infoCursos.programacion)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log( `El servidor está escuchando en el puerto http://localhost:${PORT}` )
})

// console.log(infoCursos)
