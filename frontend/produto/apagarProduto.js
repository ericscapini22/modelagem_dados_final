let btnApagar = document.getElementById('btnApagar')
let res = document.getElementById('res')

btnApagar.addEventListener('click', () => {
    let id_produto = Number(document.getElementById('id_produto').value)

    fetch('http://localhost:3000/produto/' + id_produto, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(valores => {
            valores.message
        })
        .catch((err) => {
            console.error('Erro')
            res.innerHTML = 'erro ao Apagar'
        })
})