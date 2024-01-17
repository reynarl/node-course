const express = require('express')
const app = express()

const { infoCursos } = require('./cursos')

//Routers
const routerProgramming = express.Router()
app.use('/cursos/programacion', routerProgramming)

const routerMath = express.Router()
app.use('/cursos/matematicas', routerMath)


//Routing
app.get('/', (req, res) => {
  res.send('Initialize server')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

// programacion
routerProgramming.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion))
  
})

routerProgramming.get('/:language', (req, res) => {
  // console.log(req.params.language) // { language: 'SQL' }
  // const language = req.params
  
  const { params: { language } } = req
  const { query: { ordenar }} = req
  const result = infoCursos.programacion.filter(course => course.language === language)
  if(result.length === 0){
    res.status(404).send('No se encontraron los registros')
  }

  if(ordenar === 'vistas'){
    return res.send(result.sort((a,b) => b.views - a.views))
  }

  res.send(JSON.stringify(result))
})

// Matematicas
routerMath.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})

//ruta que filtra las materias de matematicas por nivel
routerMath.get('/:level', (req, res) => {
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

