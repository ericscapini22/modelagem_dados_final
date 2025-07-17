let btnCadastrar = document.getElementById('btnCadastrar')
let res = document.getElementById('res')

btnCadastrar.addEventListener('click', () => {
    let nm_produto = document.getElementById('nm_produto').value
    let descricao = document.getElementById('descricao').value
    let categoria = document.getElementById('categoria').value
    let preco = Number(document.getElementById('preco').value)
    let porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    let estoque = Number(document.getElementById('estoque').value)
    let marca = document.getElementById('marca').value
    let ft_produto = document.getElementById('ft_produto').value

    const dados = {
        nm_produto,
        descricao,
        categoria,
        preco,
        porcentagemDesconto,
        estoque,
        marca,
        ft_produto
    }

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = "nm_produto: "+valores.nm_produto + '<br>'
            res.innerHTML += "descricao: "+valores.descricao + '<br>'
            res.innerHTML += "categoria: "+valores.categoria + '<br>'
            res.innerHTML += "preco: "+valores.preco + '<br>'
            res.innerHTML += "porcentagemDesconto: "+valores.porcentagemDesconto + '<br>'
            res.innerHTML += "estoque: "+valores.estoque + '<br>'
            res.innerHTML += "marca: "+valores.marca + '<br>'
            res.innerHTML += "ft_produto: "+valores.ft_produto + '<br>'
        })
        .catch((err) => {
            console.error('Erro')
            res.innerHTML = 'erro ao cadastrarr'
        })
})