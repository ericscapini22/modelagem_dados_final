let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', () => {

    fetch('http://localhost:3000/produto/')
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = ''
            for(let i = 0; i < valores.length; i++) {
                res.innerHTML += "<br><b>id: "+valores[i].id_produto + '</b><br>'
                res.innerHTML += "<b>nm_produto: "+valores[i].nm_produto + '</b><br>'
                res.innerHTML += "descricao: "+valores[i].descricao + '<br>'
                res.innerHTML += "categoria: "+valores[i].categoria + '<br>'
                res.innerHTML += "preco: "+valores[i].preco + '<br>'
                res.innerHTML += "porcentagemDesconto: "+valores[i].porcentagemDesconto + '<br>'
                res.innerHTML += "estoque: "+valores[i].estoque + '<br>'
                res.innerHTML += "marca: "+valores[i].marca + '<br>'
                res.innerHTML += "ft_produto: "+valores[i].ft_produto + '<br><br><hr>'
            }
        })
        .catch((err) => {
            console.error('Erro ao listar o produto!')
            res.innerHTML = 'Erro ao listar o produto!'
        })
})