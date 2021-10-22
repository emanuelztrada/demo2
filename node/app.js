//Funcionees flecha
//funciones en ES5

const years = [2000, 2005, 2008, 2018]; 

var edad5 = years.map(function(el){
    return 2019 - el;
})

console.log(edad5); 


//funciones en ES6 de tipo flecha, funcion anonima
let edad6 = years.map((el) => {
    return 2019 - el; 
}); 
console.log(edad6);

let edad7 = years.map(el => 2019 - el); 
console.log(edad7);