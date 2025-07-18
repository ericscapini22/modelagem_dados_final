let btnApagar = document.getElementById('btnApagar')
let res = document.getElementById('res')

btnApagar.addEventListener('click', () => {
    let id_usuario = Number(document.getElementById('id_usuario').value)

    fetch('http://localhost:3000/usuario/' + id_usuario, {
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
            console.error('Erro ao apagar dados do Usuário!')
            res.innerHTML = 'Erro ao apagar dados do Usuário!'
        })
})