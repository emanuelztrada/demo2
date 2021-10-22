   const fs = require('fs'); 

   //no asincrona
   const archivos = fs.readdirSync('./'); 
   console.log(archivos); 

   //asincrona recibe un callback, cuando son muchos mas procesos que leer
   fs.readdir('./', function(err, file){
       if(err) console.log('Error', err);
       else console.log('Resultado', file);
   });