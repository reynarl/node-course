// Al ser una clase, por convencion declaramos la variable iniciando con Mayúscula
const EventEmitter = require('events')

const emitProduct = new EventEmitter()

emitProduct.on('compra', (total, numProd) => {
  console.log(`Se ha realizado una compra con un total de $${total}. Cantidad de productos comprados ${numProd}`)
})

// emite el evento que incluye la funcion con nombre 'compra'
emitProduct.emit('compra', 100, 5)
