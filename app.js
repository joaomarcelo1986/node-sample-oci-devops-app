const express = require('express')
const app = express()
port = 3000

app.get('/', function (req, res) {
    res.send('<h1>Bem-vindas(os)! Oracle Cloud Infrastructure DevOps Version!!!! Joao_Marcelo1!!!</h1>')
})

app.listen(port, function() {
    console.log('OKE - Oracle Cloud app listening on port ' + port);
})                   
