let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', () => {

    fetch('http://localhost:3000/usuario/')
        .then(response => response.json())
        .then(valores => {
            res.innerHTML = ''
            for(let i = 0; i < valores.length; i++) {
                res.innerHTML += "<br>Nome: "+valores[i].nm_usuario + '<br>'
                res.innerHTML += "Sobrenome: "+valores[i].sobrenome + '<br>'
                res.innerHTML += "Idade: "+valores[i].idade + '<br>'
                res.innerHTML += "Email: "+valores[i].email + '<br>'
                res.innerHTML += "Telefone: "+valores[i].telefone + '<br>'
                res.innerHTML += "Endereço: "+valores[i].endereco + '<br>'
                res.innerHTML += "Cidade: "+valores[i].cidade + '<br>'
                res.innerHTML += "Estado: "+valores[i].estado + '<br>'
                res.innerHTML += "Data do Nascimento: "+valores[i].dataNascimento + '<br><br><hr>'
            }
        })
        .catch((err) => {
            console.error('Erro ao listar o Usuário!')
            res.innerHTML = 'Erro ao listar o Usuário!'
        })
})