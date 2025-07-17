let btnBuscar = document.getElementById('btnBuscar')
let res = document.getElementById('res')

btnBuscar.addEventListener('click', () => {
    let id_usuario = Number(document.getElementById('id_usuario').value)

    fetch('http://localhost:3000/usuario/' + id_usuario)
        .then(response => response.json())
        .then(valores => {
            if(valores.id_usuario) {
                res.innerHTML = "Nome: "+valores.nm_usuario + '<br>'
                res.innerHTML += "Sobrenome: "+valores.sobrenome + '<br>'
                res.innerHTML += "Idade: "+valores.idade + '<br>'
                res.innerHTML += "Email: "+valores.email + '<br>'
                res.innerHTML += "Telefone: "+valores.telefone + '<br>'
                res.innerHTML += "Endereço: "+valores.endereco + '<br>'
                res.innerHTML += "Cidade: "+valores.cidade + '<br>'
                res.innerHTML += "Estado: "+valores.estado + '<br>'
                res.innerHTML += "Data do Nascimento: "+valores.dataNascimento + '<br>'
            } else {
                res.innerHTML = "Usuário não encontrados!"
            }

        })
        .catch((err) => {
            console.error('Erro ao listar Usuário!')
            res.innerHTML = 'Erro ao listar Usuário!'
        })
})

