const filmesjson = require("./data/filmes.json");
const seriesjson = require("./data/series.json")

const express = require ("express")
const cors = require ("cors")
const { userInfo } = require("os")

const app = express()
app.use(cors())

app.get("/", (request, response)=>{
    response.status(200).json([
        
            "API de séries e filmes!"
        
     ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesjson)
})

app.get("/series", (request, response) => {
    response.status(200).send(seriesjson)
})

app.get("/filmes/pesquisar/:id", (request, response) => {
    let idRequest = request.params.id 

    let filmepesquisado = filmesjson.find(filme => filme.id == idRequest)

    response.status(200).send(filmepesquisado)
})

app.get("/series/pesquisar/:id", (request, response) => {
    let idRequest = request.params.id 

    let seriepesquisada = seriesjson.find(serie => serie.id == idRequest)

    response.status(200).send(seriepesquisada)
})

app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.tolowercase()

    let filmepesquisado = filmesjson.filter(filme => filme.Title.tolowercase().includes(tituloRequest))
        
        response.status(200).send(filmepesquisado)
})

app.get("/series/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.tolowercase()

    let seriepesquisada = seriesjson.filter(serie => serie.title.tolowercase().includes(tituloRequest))
        
        response.status(200).send(seriepesquisada)

})

app.post("/filmes/cadastrar", (request, response) =>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmes.length) + 1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Released,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesjson.push(novoFilme)
    response.status(200).send({
        "mensagem":"Filme cadastrado com sucesso!!",
        novoFilme
    })
})

app.post("/series/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novaSerie = {
        id: (series.length) + 1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings
    }

    seriesjson.push(novoFilme)  
    response.status(200).send({
        "mensagem":"Serie cadastrada com sucesso!!",
        novaSerie
    })
})


app.listen(9999, () => {
    console.log("Porta 9999: servidor da aula!!!")
})



