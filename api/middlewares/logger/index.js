const date = require("./../../functions/date");

const logger = (req, res, next) =>{
    //console.log("Acceso a La Página de Usuarios");
    console.log(`${date()} :: ${req.method} :: ${req.path}`);
    next();
}

module.exports= logger;