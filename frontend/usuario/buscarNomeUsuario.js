let btnBuscar = document.getElementById('btnBuscar')
let res = document.getElementById('res')

btnBuscar.addEventListener('click', () => {
    let nm_usuario = document.getElementById('nm_usuario').value

    console.log(nm_usuario);


    fetch('http://localhost:3000/usuario/nome/' + nm_usuario)
        .then(response => response.json())
        .then(valores => {
            console.log(valores);
            for (let i = 0; i < valores.length; i++) {
                res.innerHTML = "Nome: "+valores[i].nm_usuario + '<br>'
                res.innerHTML += "Sobrenome: "+valores[i].sobrenome + '<br>'
                res.innerHTML += "Idade: "+valores[i].idade + '<br>'
                res.innerHTML += "Email: "+valores[i].email + '<br>'
                res.innerHTML += "Telefone: "+valores[i].telefone + '<br>'
                res.innerHTML += "Endereço: "+valores[i].endereco + '<br>'
                res.innerHTML += "Cidade: "+valores[i].cidade + '<br>'
                res.innerHTML += "Estado: "+valores[i].estado + '<br>'
                res.innerHTML += "Data do Nascimento: "+valores[i].dataNascimento + '<br>'
            }

        })
        .catch((err) => {
            console.error('Erro ao listar Usuário!')
            res.innerHTML = 'Erro ao listar Usuário!'
        })
})