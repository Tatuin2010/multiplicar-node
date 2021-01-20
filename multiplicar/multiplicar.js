// requires
const fs = require('fs'); // de node
const colors = require('colors');
// const fs = require('express');   // de express
// const fs = require('./patch');   // los propios

let listarTabla = (base, limite = 10) => {

    console.log(`TABLA del ${base}\n`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = `.cyan, `${base * i}\n`.green);
    }

}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`.green);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}