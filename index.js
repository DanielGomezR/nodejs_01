const express = require('express');
const mogoose = require('mongoose');

const app = express();
const api = require('./api')

app.use(express.json());
app.use('/api',api);

//protocolo://user:password@host:port/resource
mogoose.connect('mongodb://localhost:27017/twitter',{
    useNewUrlParser:true,
    userUnifiedTopology: true
}, ()=>{
    console.log("Conectado a la base de Datos")
});

app.listen(3000, () =>{ 
    console.log("Servidor Iniciado");
});

 
