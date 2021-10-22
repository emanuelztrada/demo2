 //async/await
 // promesas

//  const mensaje = new Promise((resolve, reject) => {
function mensaje(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(false)
                resolve('Esto se va ejecutar despues de 3 segundos');
            else
                reject('Hubo un error'); 
        }, 3000); 
    });
}

async function llamadaAsync(){
    console.log('Llamada..');
    const resultado = await mensaje();
    // console.log(resultado);
    return resultado;
}

llamadaAsync()
    .then(msj => console.log(msj))
    .catch(error => console.log(error));

// mensaje
//     .then(msj => {
//         console.log(msj);
//     })
//     .catch(error => {
//         console.log(error); 
//     })
