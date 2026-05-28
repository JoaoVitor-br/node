const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors)
app.use(express.json())

app.use(express.static("public"))

const conexao= mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "senai",
    database: "palavras"
})

conexao.connect((erro) => {
    if(erro){
        console.log("Erro na conexão")
    } else{
        console.log("Conectado ao MySQL")
    }
})

app.post("/salvar", (req, res) => {
    const palavra = req.body.palavra

    const sql = "INSERT INTO palavra (texto) VALUES (?)"

    conexao.query(sql, [palavra], (erro) =>{
        if(erro){
            res.send("Erro no insert")
        }else{
            res.send("Palavra salva")
        }
    })
})
app.listen(3000,() => {
    console.log("servidor funcionado")
})