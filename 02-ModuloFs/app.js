const fs = require('fs')

// LEYENDO ARCHIVO

// fs.readFile('./index.html', 'utf-8', (error, content) => {
  
//   if (error) {
//     console.log(error)
//     // Detener la ejecución sin dejar que avance, dandonos informacion del error
//     // throw error
//   } else {
//     console.log(content)
//   }

// })

// CAMBIANDO DE NOMBRE

  // ('ubicacion_del_archivo', 'nuevo_nombre')
// fs.rename('./index.html', 'main.html', (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Nombre cambiado con exito')
// })

// AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO

// fs.appendFile('./main.html', '<p>Agregando...</p>', (err) => {
//   if(err){
//     throw err
//   }

//   console.log('archivo actualizado...');
// })


// Reemplazar todo el contenido del archivo

// fs.writeFile('./main.html', 'Contenido nuevo', (err) => {
//   if(err){
//     throw err
//   }

//   console.log('contendio reemplazado exitosamente')

// })


// Eliminar archivos

fs.unlink('./prueba.js', (err) => {
  if(err){
    throw err
  }

  console.log('Archivo eliminado')
})