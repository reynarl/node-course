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
  res.send(JSON.stringify(infoCursos.programacion))
})

app.get('/cursos/matematicas', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})

//
app.get('/cursos/programacion/:language', (req, res) => {
  // console.log(req.params.language) // { language: 'SQL' }
  const language = req.params.language
  const result = infoCursos.programacion.filter(course => course.language === language)
  if(result.length === 0){
    res.status(404).send('No se encontraron los registros')
  }

  res.send(JSON.stringify(result))
})

//ruta que filtra las materias de matematicas por nivel
app.get('/cursos/matematicas/:level', (req, res) => {
  const level = req.params.level
  const result = infoCursos.matematicas.filter(course => course.level === level)
  if(result.length === 0){
    res.status(404).send('No se encontraron los registros')
  }
  res.send(JSON.stringify(result))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log( `El servidor está escuchando en el puerto http://localhost:${PORT}` )
})

// console.log(infoCursos)
