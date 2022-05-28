const express = require("express") estou chamando, invocando, requerindo o express para meu arquivo

agora vou executar o express, ele por dentro é "uma grande funçãozona"
const app = express() 
executei, guardei o express nessa variavel app

agora vou criar a porta, o servidor vai ficar no local host, que vai ser o servidor que ira guardar a minha API, será meu computador=local host.

configurar a porta: pra configurar vou chamar o app que foi armazenada na variavel acima
vou usar a função de criação de porta que vai ser a função >>listen<<< que pertence ao express.
o nº 8080 se refere ao 1º parametro que ele pede, que é o numero da porta, e depois ele tem uma função que será 
executada. O computador tem portas limitadas, normalmente tudo quem tem abaixo de 3000 já tem sido usada pelo proprio computador toda vez que se abre uma porta tem que fechar, se não aquela porta fica indisponivel 

será dado um console.log pra avisar se deu certo.

app.listen(8080, ()=>{
    console.log("o servidor esta funcionando na porta 8080!")
})

no git vou dar o comando: npm start que vai ser na verdade o arquivo: node server.js  

para o ciclo de criação da API REST esta concluido, preciso ter:
- porta (já criada)
- rota  
- http response
- response
  
time:1:48:50

app.get()