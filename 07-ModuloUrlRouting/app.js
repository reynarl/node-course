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
 const { infoCursos } = require('./cursos')

 const server = http.createServer((req, res) => {
  const {method} = req // obtenemos el tipo de método (GET,PUT,POST, DELETE...)
  switch(method){
    case 'GET':
      return getMethod(req, res)
    case 'POST':
      return postMethod(req, res)
    case 'PUT':
      return putMethod(req, res)
    default: //si el metodo no es ninguno de los que se implementan
      console.log(`El metodo unsado no puede ser procesado por el servidor: ${method}`)
  }
 })

 const getMethod = (req, res) => {
  const path = req.url // obtenemos la url del sitio
  console.log(path)

  if(path === '/'){
    // el status por defecto es 200 hasta que se indique uno nuevo, asi que no existe necesidad de ponerlo
    // res.statusCode = 200

    //podemos configurar la cabecera con res.writeHead
    res.writeHead(200, {'Content-Type': 'application/json'})
    return res.end('Bienvenido al servidor y API con Node.js')
  } else if (path === '/cursos'){
    return res.end(JSON.stringify(infoCursos))
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion))
  } else if(path === '/cursos/matematicas'){
    return res.end(JSON.stringify(infoCursos.matematicas))
  } else {
    res.statusCode = 404
    return res.end('Pagina no encontrada')
  }
 }

 const postMethod = (req, res) => {
  const path = req.url
  console.log(path)

  if(path === '/cursos/programacion'){
    return res.end('El servidor recibio una solicitud post')
  }
 }

 const putMethod = (req, res) => {
  const path = req.url
  console.log(path)

  if(path === '/cursos/matematicas'){
    return res.end('El servicio resibio una solicitud PUT')
  }
 }


 server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`)
 })