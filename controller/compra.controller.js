const Compra = require('../model/Compra')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Compra.create(dados)
        res.status(201).json(valores)
    } catch (err) {
        console.error('Erro ao cadastrar a compra!',err)
        res.status(500).json({message: "Erro ao cadastrar a compra!"})
    }
}

const listar = async (req, res) => {
    try {
        const valores = await Compra.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao listar as compras!',err)
        res.status(500).json({message: "Erro ao listar as compras!"})
    }
}

const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Compra.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar a compra!',err)
            res.status(404).json({message: "Falha ao tentar encontrar a compra!"})
        } else {
            await Compra.update(dados, {where: {id_compra : id}})
            const valoresAtual = await Compra.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados da compra atualizados com sucesso!')
        }
    } catch (err) {
        console.error('Falha ao atualizar dados da compra!',err)
        res.status(500).json({message: "Falha ao atualizar dados da compra!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Compra.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar a compra!',err)
            res.status(404).json({message: "Falha ao tentar encontrar a compra!"})
        } else {
            await Compra.destroy({where: {id_compra : id}})
            console.log('Compra apagada com sucesso!')
            res.status(200).json({message: "Compra apagada com sucesso!"})
        }
    } catch (err) {
        console.error('Falha ao tentar apagar a compra!',err)
        res.status(500).json({message: "Falha ao tentar apagar a compra!"})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }