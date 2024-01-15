// Modulo URL

// const myURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

// console.log(myURL.hostname) //www.ejemplo.org
// console.log(myURL.pathname) // /cursos/programacion
// console.log(myURL.searchParams) // { 'ordenar' => 'vistas', 'nivel' => '1' }
// //accedemos al objeto y nos devuelve el valor que tiene en 'ordenar'
// console.log(myURL.searchParams.get('ordenar')) // vistas


// ROUTING 

 const http = require('http')

 const port = 3000
 const cursos = require('./cursos')

 const server = http.createServer((req, res) => {
  const {method} = req // obtenemos el tipo de método (GET,PUT,POST, DELETE...)
  switch(method){
    case 'GET':
      return getMethod(req, res)
    default: //si el metodo no es ninguno de los que se implementan
      console.log(`El metodo unsado no puede ser procesado por el servidor: ${method}`)
  }
 })

 const getMethod = (req, res) => {
  const path = req.url // obtenemos la url del sitio
  console.log(path)

  if(path === '/'){
    res.statusCode = 200
    res.end('Bienvenido al servidor y API con Node.js')
  } else if (path === '/cursos'){
    res.statusCode = 200
    res.end(JSON.stringify(cursos.infoCursos))
  } else if (path === '/cursos/programacion') {
    res.statusCode = 200
    res.end(JSON.stringify(cursos.infoCursos.programacion))
  } else if(path === '/cursos/matematicas'){
    res.statusCode = 200
    res.end(JSON.stringify(cursos.infoCursos.matematicas))
  } else {
    res.statusCode = 404
    res.end('Pagina no encontrada')
  }
 }

 server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`)
 })