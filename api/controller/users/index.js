const User = require("../../models/users");

const getAll = (req, res) =>{
    //res.send("Lista de usuarios");

    User.find({}, ["name","username"])
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        send.status(500);
    })
}
const getUser = (req, res) =>{
    const Id = req.params.id;
    User.find({_id : Id}, ["name","username"])
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        send.status(500);
    })
}
const newUser = (req, res) =>{
    //res.send("Crear Usuario");
    const user = {
        name: req.body.name,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephones: req.body.telephones
    };
    if (user.name && user.password && user.age && user.username && user.email){
        const object = new User(user);
        object.save()
        .then((response)=>{
            res.status(201).send(`^El usuario fue creado con Id: ${response._id}`);
        })
        .catch((err)=>{
            send.sendStatus(500);
        })
    }else{
        send.sendStatus(500);
    }

}
const updateUser = (req, res) =>{
    res.send("Modificar Usuario");
}
const deleteUser = (req, res) =>{
    //res.send("Borrar Usuario");
    //const Id = req.params.id;
    User.remove({}) // _id : Id
    .then(()=>{
        res.status(200).send("Eliminado Correctamente");
    })
    .catch((err)=>{
        send.status(500);
    })
}

module.exports = {getAll, getUser, newUser, updateUser, deleteUser};