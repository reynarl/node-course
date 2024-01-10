function saludar(nombre){
  return `Hola ${nombre}`
}

function holaMundo(){
  return 'Hola Mundo del 2023'
}

// module.exports.saludar = saludar
// module.exports.holaMundo = holaMundo

module.exports = {
  saludar : saludar,
  holaMundo : holaMundo,
}
