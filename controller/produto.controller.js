const Produto = require('../model/Produto')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Produto.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao cadastrar o produto!',err)
        res.status(500).json({message: "Erro ao cadastrar o produto!"})
    }
}

const listar = async (req, res) => {
    try {
        const valores = await Produto.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao listar os produtos!',err)
        res.status(500).json({message: "Erro ao listar os produtos!"})
    }
}

const listarPorId = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o produto!')
            res.status(404).json({ message: "Produto não encontrado!"})
        } else {
            res.status(200).json(valores)
            console.log('Produto encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Erro ao buscar produto por ID!', err)
        res.status(500).json({ message: "Erro ao buscar produto por ID!"})
    }
}

const listarPorNome = async (req,res)=>{
    const nome = req.params.nome
    try {
        const valores = await Produto.findOne({where: { nome: nome }})
        if (valores === null) {
            res.status(404).json({ message: "Produto não encontrado!" })
        } else {
            res.status(200).json(valores)
            console.log('Produto encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Erro ao buscar produto por nome!', err)
        res.status(500).json({ message: "Erro ao buscar produto por nome!" })
    }
}

const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o produto!',err)
            res.status(404).json({message: "Falha ao tentar encontrar produto!"})
        } else {
            await Produto.update(dados, {where: {id : id}})
            const valoresAtual = await Produto.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados do produto atualizados com sucesso!')
        }
    } catch (err) {
        console.error('Falha ao atualizar dados do produto!',err)
        res.status(500).json({message: "Falha ao atualizar dados do produto!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o produto!',err)
            res.status(404).json({message: "Falha ao tentar encontrar produto!"})
        } else {
            await Produto.destroy({where: {id : id}})
            console.log('Produto apagados com sucesso!')
            res.status(200).json({message: "Produto apagados com sucesso!"})
        }
    } catch (err) {
        console.error('Falha ao tentar apagar o produto!',err)
        res.status(500).json({message: "Falha ao tentar apagar o produto!"})
    }
}

module.exports = { cadastrar, listar, listarPorId, listarPorNome, atualizar, apagar }