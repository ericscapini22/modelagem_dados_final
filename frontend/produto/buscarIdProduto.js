let btnBuscar = document.getElementById('btnBuscar')
let res = document.getElementById('res')

btnBuscar.addEventListener('click', () => {
    let id_produto = Number(document.getElementById('id_produto').value)

    fetch('http://localhost:3000/produto/' + id_produto)
        .then(response => response.json())
        .then(valores => {
            if(valores.id_produto) {
                res.innerHTML = "nm_produto: "+valores.nm_produto + '<br>'
                res.innerHTML += "descricao: "+valores.descricao + '<br>'
                res.innerHTML += "categoria: "+valores.categoria + '<br>'
                res.innerHTML += "preco: "+valores.preco + '<br>'
                res.innerHTML += "porcentagemDesconto: "+valores.porcentagemDesconto + '<br>'
                res.innerHTML += "estoque: "+valores.estoque + '<br>'
                res.innerHTML += "marca: "+valores.marca + '<br>'
                res.innerHTML += "ft_produto: "+valores.ft_produto + '<br>'
            } else {
                res.innerHTML = "dados não encontrados"
            }

        })
        .catch((err) => {
            console.error('Erro')
            res.innerHTML = 'erro ao Apagar'
        })
})