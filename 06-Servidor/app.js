const http = require('http')

const port = 3000

const server = http.createServer(( req, res) => {
  
  // console.log(req.url)

  // indica el tipo de método usado GET POST PUT DELETE
  // console.log(req.method)

  // console.log(req.headers)

  // res.statusCode = 404
  // console.log(res.statusCode)

  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders())

  res.end('Hello World')
})

server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${port}`)
})