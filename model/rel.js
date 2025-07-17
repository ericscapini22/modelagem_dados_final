const Usuario = require('./Usuario')
const Produto = require('./Produto')
const Compra = require('./Compra')

Usuario.hasMany(Compra, {
    foreignKey: 'id_usuario',
    as: 'comprasUser',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuariosComp',
    allowNull: false
})

Produto.hasMany(Compra, {
    foreignKey: 'id_produto',
    as: 'comprasProd',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Produto, {
    foreignKey: 'id_produto',
    as: 'produtosComp',
    allowNull: false
})

module.exports = { Produto, Usuario, Compra }