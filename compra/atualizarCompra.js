let btnAtualizar = document.getElementById('btnAtualizar')
let res = document.getElementById('res')

btnAtualizar.addEventListener('click', () => {
    let id_compra = Number(document.getElementById('id_compra').value)
    let id_usuario = Number(document.getElementById('id_usuario').value)
    let id_produto = Number(document.getElementById('id_produto').value)
    let quant = Number(document.getElementById('quant').value)
    let dataCompra = document.getElementById('dataCompra').value
    let precoUnitario = Number(document.getElementById('precoUnitario').value)
    let descontoAplicado = Number(document.getElementById('descontoAplicado').value)
    let precoFinal = Number(document.getElementById('precoFinal').value)
    let formaPagamento = document.getElementById('formaPagamento').value
    let statusCompra = document.getElementById('statusCompra').value

    const dados = {
        id_usuario,
        id_produto,
        quant,
        dataCompra,
        precoUnitario,
        descontoAplicado,
        precoFinal,
        formaPagamento,
        statusCompra
    }

    fetch('http://localhost:3000/compra/'+id_compra, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = "Compra atualizada com sucesso!<br>"
            res.innerHTML += "ID Usuário: " + valores.id_usuario + "<br>"
            res.innerHTML += "ID Produto: " + valores.id_produto + "<br>"
            res.innerHTML += "Quantidade: " + valores.quant + "<br>"
            res.innerHTML += "Data da Compra: " + valores.dataCompra + "<br>"
            res.innerHTML += "Preço Unitário: R$" + valores.precoUnitario + "<br>"
            res.innerHTML += "Desconto Aplicado: " + valores.descontoAplicado + "%<br>"
            res.innerHTML += "Preço Final: R$" + valores.precoFinal + "<br>"
            res.innerHTML += "Forma de Pagamento: " + valores.formaPagamento + "<br>"
            res.innerHTML += "Status da Compra: " + valores.statusCompra + "<br>"
        })
        .catch((err) => {
            console.error('Erro ao atualizar dados do usuário!')
            res.innerHTML = 'Erro ao atualizar dados do usuário!'
        })
})