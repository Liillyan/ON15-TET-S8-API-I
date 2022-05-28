const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Ghibi on15"
        }
    ])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

// PATH PARAMS
// pesquisa pr ID
app.get("/filmes/buscar/:id", (request, response)=>{

    let idRequest = request.params.id //esse .id poderia ser bananinha, é uma variavel e posso renomear como quiser

    // o (filme... representa a unidade do objeto do ghibli.json, estou dizendo que cada objeto será chamado de "filme"
    // ai dentro do objeto agora renomeado de "filme" e dentro dessa unidade vai eistir o elemento "id" então vou chama-lo
    //do seguinte modo: filme.id
    //  com o "== idRequest" estou dizendo que vai ser igual ao id que foi enviado na request, para que o que meu usuario 
    //achou ao id que ta no meu banco de dados (nesse caso, no meu json), igual ao que o usuari colocou na rota, pelo client
    // ou seja, no site digitado pelo usuario

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

    console.log(idRequest)
    console.log(filmeEncontrado)

})
//QUERY PARAMS
//Pesquisa por nome
app.get("/filmes/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase() // .toLowerCase() e para que todas as letras que esta sendo enviadas na request sejam transformadas em minusculo
     // esse .titulo poderia ser bananinha, e uma variavel e posso renomear como quiser
    
    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))
    //.toLowerCase() para trnsformar os titulos de json defilmes em miusculo
    //estou procurando dentro de json de filmes (filmes.Json) um filme que o titulo inclua a informacao que foi mandada
    //para o request 
    response.status(200).send(filmeEncontrado)
  
})

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id:(filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(200).send({
        "mensagem": "filme cadastrado com sucesso",
        novoFilme
    })
})

app.listen(8888, ()=>{
    console.log("testando servidor da aula!!!")
}) 