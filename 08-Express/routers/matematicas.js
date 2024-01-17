const express = require('express')

const routerMath = express.Router()
const { infoCursos: { matematicas } } = require('../cursos')

routerMath.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

//ruta que filtra las materias de matematicas por nivel
routerMath.get('/:level', (req, res) => {
  const level = req.params.level
  const result = matematicas.filter(course => course.level === level)
  if (result.length === 0) {
    res.status(404).send('No se encontraron los registros')
  }
  res.send(JSON.stringify(result))
})

module.exports = routerMath