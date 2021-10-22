// funciones callback
function Mensaje(callback){
    console.log('Mensaje antes de la llamada callback'); 
    callback(); 
}

function saludo(){
    console.log('Saludo despues de la llamada al callback'); 
}

Mensaje(saludo); 


setTimeout(function(){
    console.log('Esto se va ejecutar despues de 3 segundos');
}, 3000);

//FUNCIONES ANONIMAS
setTimeout(() => console.log('Esto se va ejecutar despues de 3 segundos'), 3000)