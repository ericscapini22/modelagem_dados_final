const Usuario = require('../model/Usuario')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Usuario.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao cadastrar o usuário!',err)
        res.status(500).json({message: "Erro ao cadastrar o usuário!"})
    }
}

const listar = async (req, res) => {
    try {
        const valores = await Usuario.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao listar os usuários!',err)
        res.status(500).json({message: "Erro ao listar os usuários!"})
    }
}

const listarPorId = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o usuário!')
            res.status(404).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json(valores)
            console.log('Usuário encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Erro ao buscar usuário por ID!', err)
        res.status(500).json({ message: "Erro ao buscar usuário por ID!" })
    }
}

const listarPorNome = async (req,res)=>{
    const nome = req.params.nome
    try {
        const valores = await Usuario.findOne({where: { nm_usuario: nome }})
        if (valores === null) {
            res.status(404).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json(valores)
            console.log('Usuário encontrado com sucesso!')
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
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o usuário!',err)
            res.status(404).json({message: "Falha ao tentar encontrar usuário!"})
        } else {
            await Usuario.update(dados, {where: {id : id}})
            const valoresAtual = await Usuario.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados do usuário atualizados com sucesso!')
        }
    } catch (err) {
        console.error('Falha ao atualizar dados do usuário!',err)
        res.status(500).json({message: "Falha ao atualizar dados do usuário!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o usuário!',err)
            res.status(404).json({message: "Falha ao tentar encontrar usuário!"})
        } else {
            await Usuario.destroy({where: {id : id}})
            console.log('Dados do usuário apagados com sucesso!')
            res.status(200).json({message: "Dados do usuário apagados com sucesso!"})
        }
    } catch (err) {
        console.error('Falha ao apagar dados do usuário!',err)
        res.status(500).json({message: "Falha ao apagar dados do usuário!"})
    }
}

module.exports = { cadastrar, listar, listarPorId, listarPorNome, atualizar, apagar }