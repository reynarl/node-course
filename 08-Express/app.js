const express = require('express')
const app = express()

const { infoCursos } = require('./cursos')

//Routers
const routerProgramming = require('./routers/programacion')
app.use('/cursos/programacion', routerProgramming)

const routerMath = require('./routers/matematicas')
app.use('/cursos/matematicas', routerMath)


app.get('/', (req, res) => {
  res.send('Initialize server')
})

app.get('/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
})

