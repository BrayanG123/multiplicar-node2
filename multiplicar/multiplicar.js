//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let data = '';

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) reject('No es un numero')

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-base${base}-limite${limite}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-base${base}-limite${limite}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}