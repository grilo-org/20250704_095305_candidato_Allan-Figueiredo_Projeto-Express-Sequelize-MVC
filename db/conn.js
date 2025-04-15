const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', '', {

    host: '127.0.0.1',
    port: 3307,
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Concetado com sucesso!')
} catch (err) {
    console.error (`Não foi possível conectar: ${err}`)
}

module.exports = sequelize