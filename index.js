require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const conn = require('./db/conn')

const usuarioController = require('./controller/usuario.controller')
const produtoController = require('./controller/produto.controller')
const compraController = require('./controller/compra.controller')

// ----------- < Middleware > ------------

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ----- / Usuário / -----

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario', usuarioController.listar)
app.get('/usuario/:id', usuarioController.listarPorId)
app.get('/usuario/:nome', usuarioController.listarPorNome)
app.put('/usuario/:id', usuarioController.atualizar)
app.delete('/usuario/:id', usuarioController.apagar)

// ----- / Produto / -----

app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.get('/produto/:id', produtoController.listarPorId)
app.get('/produto/:nome', produtoController.listarPorNome)
app.put('/produto/:id', produtoController.atualizar)
app.delete('/produto/:id', produtoController.apagar)

// ----- / Compra / -----

app.post('/compra', compraController.cadastrar)
app.get('/compra', compraController.listar)
app.put('/compra/:id', compraController.atualizar)
app.delete('/compra/:id', compraController.apagar)

app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação rodando!"})
})

// ----- // -----

conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao conectar com o Banco de Dados!',err)
})

