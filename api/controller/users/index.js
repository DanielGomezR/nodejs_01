const getAll = (req, res) =>{
    res.send("Lista de usuarios");
}
const getUser = (req, res) =>{
    res.send("Pagina de Usuario");
}
const newUser = (req, res) =>{
    res.send("Crear Usuario");
}
const updateUser = (req, res) =>{
    res.send("Modificar Usuario");
}
const deleteUser = (req, res) =>{
    res.send("Borrar Usuario");
}

module.exports = {getAll, getUser, newUser, updateUser, deleteUser};