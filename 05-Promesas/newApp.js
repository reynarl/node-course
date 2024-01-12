 const order = false

 const pizzaStore = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(order) {
      resolve('Orden realizada con exito')
    } else {
      reject('Orden rechazada')
    }
  }, 3000)
 })

 pizzaStore
  .then((value) => console.log(value))
  .catch((value) => console.log(value))

