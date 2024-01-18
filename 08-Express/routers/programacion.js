const express = require('express')

const routerProgramming = express.Router()
const { infoCursos: { programacion } } = require('../cursos')

//Middleware, nos permite procesar el cuerpo de la solicitud en formato JSON: Se ejecutan despues de recibir una solicitud y antes de enviar una respuesta.
// Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una funcion que se llama para ejecutar el proximo middleware
routerProgramming.use(express.json())

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

routerProgramming.post('/', (request, response) => {
  let newCourse = request.body
  programacion.push(newCourse)
  response.send(JSON.stringify(programacion))
})

routerProgramming.put('/:id', (req, res) => {
  const editCourse = req.body
  const { params: { id } } = req

  //findIndex devuelve el índice del elemento de un array que cumpla con la condicion. En caso contrario devuelve -1.
  const index = programacion.findIndex(course => course.id == id)

  if (index >= 0) {
    programacion[index] = editCourse
  }

  res.send(JSON.stringify(programacion))
})

routerProgramming.patch('/:id', (req, res) => {
  const editCourse = req.body
  const { params: { id } } = req

  const index = programacion.findIndex(course => course.id == id)

  if (index >= 0) {
    const courseToModify = programacion[index]
    Object.assign(courseToModify, editCourse)
  }
  res.send(JSON.stringify(programacion))
})

routerProgramming.delete('/:id', (req, res) => {
  const { params: { id } } = req

  const index = programacion.findIndex(course => course.id == id)

  if (index >= 0) {
    programacion.splice(index, 1)
  }

  res.send(JSON.stringify(programacion))

})

module.exports = routerProgramming