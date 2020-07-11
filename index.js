// Importar Espress
const express = require('express');
//Instanciar Express en el objeto app
const app = express();
//Importar módulo personalizado
const date = require('./date');

app.get('/', (req, res) =>{
    //console.log(req);
    res.status(200);
    res.send(`Hello World ${date()}`);
});

// app.get('/:name', (req, res) =>{
//     const name = req.params.name;
//     res.send(`Hola ${name}`);
// });

app.get('/users', (req, res) =>{
    res.status(200).send(`Página de Usuarios`);
});

app.get('/users/:id', (req, res) =>{
    const id =req.params.id;
    if(id >0){
        res.status(200).res.send(`Página del Usuario ${req.params.id}`);
    }else{
        res.status(400).send("Usuario no existe.");
    }
});

app.listen(3000, () =>{ 
    console.log("Servidor Iniciado");
});