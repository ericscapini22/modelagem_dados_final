let btnApagar = document.getElementById('btnApagar')
let res = document.getElementById('res')

btnApagar.addEventListener('click', () => {
    let id_compra = Number(document.getElementById('id_compra').value)

    fetch('http://localhost:3000/compra/' + id_compra, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = valores.message
        })
        .catch((err) => {
            console.error('Erro ao apagar a Compra!')
            res.innerHTML = 'Erro ao apagar a Compra!'
        })
})