const promise = true

const myPromise = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    if (promise) {
      resolve('Promesa cumplida')
    } else {
      reject('Promesa rechazada')
    }
  }, 2000)
})

const successPromise = (value) => {
  console.log(value)
}

const failedPromise = (fail) => {
  console.log(fail)
}

// dentro de los parametros de .then ponemos las funciones que tendrán como mensaje si la promesa fue exitosa o rechazada, como primer parámetro se pone la funcion de promesa cumplida y como segundo parámetro si la promesa es rechazada
myPromise.then(successPromise, failedPromise)



