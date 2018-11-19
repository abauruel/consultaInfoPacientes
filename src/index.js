const express = require('express')
const oracledb = require('oracledb')
const DbConfig = require('./config/dbconfig')



const app = express()   

app.use(express.json())
app.use(require('./routes'))
app.listen(3000, 
    ()=>{console.log("Servidor rodando na porta: 3000")}
    )