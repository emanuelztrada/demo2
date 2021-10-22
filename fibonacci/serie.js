//Serie de fibonacci
const fs = require('fs');

let crearSerie = (cantidad) =>{
    return new Promise((resolve, reject)=>{
        let fibo1 = 1; 
        let fibo2 = 1; 
        let data = '';
        data += `${fibo1}\n`;

        for(let i=2; i<= cantidad; i++){
            data += `${fibo2}\n`; 
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile('fibonacci.txt', data, (err) => {
            if (err) 
                reject( 'Error al crear el archivo');
            else
                resolve('The file has been saved!');
        });
    })
    

}

module.exports = {
    crearSerie
}
