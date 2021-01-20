const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutiplicar', opciones)
    .command('crear', 'Crea un archivo con el numero de multiplicaciones', opciones)
    .help()
    .argv;


module.exports = {
    argv
}