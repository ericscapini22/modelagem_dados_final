let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', () => {
    fetch('http://localhost:3000/compra/')
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = ''
            for (let i = 0; i < valores.length; i++) {
                res.innerHTML += "<br>ID Compra: " + valores[i].id_compra + "<br>"
                res.innerHTML += "ID Usuário: " + valores[i].id_usuario + "<br>"
                res.innerHTML += "ID Produto: " + valores[i].id_produto + "<br>"
                res.innerHTML += "Quantidade: " + valores[i].quant + "<br>"
                res.innerHTML += "Data da Compra: " + valores[i].dataCompra + "<br>"
                res.innerHTML += "Preço Unitário: R$" + valores[i].precoUnitario + "<br>"
                res.innerHTML += "Desconto Aplicado: " + valores[i].descontoAplicado + "%<br>"
                res.innerHTML += "Preço Final: R$" + valores[i].precoFinal + "<br>"
                res.innerHTML += "Forma de Pagamento: " + valores[i].formaPagamento + "<br>"
                res.innerHTML += "Status da Compra: " + valores[i].statusCompra + "<br><br><hr>"
            }
        })
        .catch((err) => {
            console.error('Erro ao listar as compras!', err)
            res.innerHTML = 'Erro ao listar as compras!'
        })
})