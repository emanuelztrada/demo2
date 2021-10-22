/*const {MongoEnviroment} = require("./environments");

const person = {
    name: "diego",
    lastname: "orellana",
    age: 26,
    school:{
        name: "liceo guatemala"
    }
}

const role = {
    job: "developer"
}

const personRole1 = {
    name: person.name,
    age: person.age,
    job: role.job
}

const personRole2 = {
    ...person,
    ...role
}

console.log(`${person.name} ${person.lastname}`);
console.log("personRole2", personRole2);
console.log("school of person", {...person.school} )*/

const array = [{name: "diego", id: 1}];

array.push({name: "luis", id: 2});
array.push({name:"brenda", id:3});

function compare (x) {
    return x.id == 1
}

function hey (){
    console.log("heyyyyu")
}


async function tmp (){
    console.log("hetyyy")
}
const person = array.find(compare)
console.log(person);

