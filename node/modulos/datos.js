//Modulo de eventos
const EventEmitter = require('events'); 
const emitter = new EventEmitter();

//Cda emitt tiene que tener el texto por ejemplo 'mensajeLoger' que sean iguales. 

//Registrar el Listener
emitter.on('mensajeLoger', function(arg){
    console.log('Listener llamado...', arg);
})

//funcion de flecha
// emitter.on('mensajeLoger', (arg) =>{
//     console.log('Listener llamado...', arg);
// })

//Registrar el evento con argumentos que son opcionales.
emitter.emit('mensajeLoger', {id:1, url:'http://prueba.com'});