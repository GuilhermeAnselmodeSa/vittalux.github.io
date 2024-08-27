var express = require("express");
const app = express(); //deixar a var em uma constante pra nao ter perigo de sobrescrita de dados


app .listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
})
