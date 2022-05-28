const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["salve, mundao"])
})

app.get("/2rota", (require, response)=>{
    response.status(201).json(["rota 2 funcionando!!"])
})

app.listen(8088, ()=>{
    console.log("meu servidor esta roda ndo na prta 8088")
})
