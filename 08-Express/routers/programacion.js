const express = require('express')

const routerProgramming = express.Router()
const { infoCursos: { programacion } } = require('../cursos')

routerProgramming.get('/', (req, res) => {
  res.send(JSON.stringify(programacion))
})

routerProgramming.get('/:language', (req, res) => {
  // console.log(req.params.language) // { language: 'SQL' }
  // const language = req.params

  const { params: { language } } = req
  const { query: { ordenar } } = req
  const result = programacion.filter(course => course.language === language)
  if (result.length === 0) {
    res.status(404).send('No se encontraron los registros')
  }

  if (ordenar === 'vistas') {
    return res.send(result.sort((a, b) => b.views - a.views))
  }

  res.send(JSON.stringify(result))
})

module.exports = routerProgramming