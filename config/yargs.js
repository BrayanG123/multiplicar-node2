const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'Imrpime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo .txt con la tabla de multiplicar', opciones)
    .help()
    .argv;


module.exports = {
    argv
}