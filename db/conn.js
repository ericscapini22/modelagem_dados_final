const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('Conexão com o Banco de Dados bem-sucedida!')
})
.catch((err)=>{
    console.error('Erro ao conectar com o Banco de Dados!')
})

module.exports = sequelize