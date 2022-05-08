require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY) {
    throw new Error('No hay configuración con Api key y con Token');
}
let a = 1;
let b = 2;

console.log("Hola mundo");
