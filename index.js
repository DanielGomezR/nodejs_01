// Importar Espress
const express = require('express');
const app = express();
const api = require('./api')


// Modelos
// const users = [] ;

//middlewares
app.use(express.json());
app.use('/api',api);
app.use('/api/v1',api);
//app.use('/api/v2',api);


app.listen(3000, () =>{ 
    console.log("Servidor Iniciado");
});


// const date = require('./date');
// const bmi = require('./bmi');
//app.use(logger);

// app.get('/', (req, res) =>{
//     //console.log(req);
//     res.status(200);
//     res.send(`Hello World ${date()}`);
// });

// app.get('/users', (req, res) =>{
//     res.status(200).send(users);
// });

// app.get('/users/:id', (req, res) =>{
//     const id =req.params.id;
//     if(id >0){
//         res.status(200).send(`Página del Usuario ${req.params.id}`);
//     }else{
//         res.status(400).send("Usuario no existe.");
//     }
// });

// app.post('/users',  (req, res) => {
//     const user = {
//         name:req.body.name,
//         lastname: req.body.lastname
//     };
//     users.push(user);
//     res.status(200).send(`El usuario ${user.name}`)
// });

// app.get('/bmi/:w/:h', (req, res) =>{
//     const w =req.params.w;
//     const h =req.params.h;
//     const  bmiResult = bmi(w,h);
//     bmiResult == -1 ? 
//         res.status(500).send(`Ha Ocurrido un Error.`)
//         :    
//         res.status(200).send(`Su BMI es : ${bmiResult}`)
// });

