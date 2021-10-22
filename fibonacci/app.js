 const serie = require('./serie'); 

 let argv = process.argv;
 let valor = argv[2].split('=')[1];
//  console.log(cantidad);
 let cantidad = valor; 

 serie.crearSerie(cantidad)
    .then(msj => console.log(msj))
    .catch(msj => console.log(msj))