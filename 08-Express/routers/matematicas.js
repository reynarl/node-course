const express = require('express')

const routerMath = express.Router()
const { infoCursos: { matematicas } } = require('../cursos')

routerMath.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMath.get('/:language', (req, res) => {
  const { params: { language } } = req
  const result = matematicas.filter(course => course.language === language)

  res.json(result)
  console.log(result)
})

routerMath.post('/', (req, res) => {
  const newCourse = req.body
  matematicas.push(newCourse)
  res.json(matematicas)
})

//ruta que filtra las materias de matematicas por nivel
// routerMath.get('/:level', (req, res) => {
//   const level = req.params.level
//   const result = matematicas.filter(course => course.level === level)
//   if (result.length === 0) {
//     res.status(404).send('No se encontraron los registros')
//   }
//   res.json(result)
// })

module.exports = routerMath