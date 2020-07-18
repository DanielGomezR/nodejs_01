const Tweet = require("../../models/tweets");
const User = require("../../models/users");
const { populate } = require("../../models/users");

const getAll = (req, res) =>{
    //res.send("Lista de usuarios");

    Tweet.find({}, (err, tweets) =>{
        User.populate(tweets, {path: 'user'}, (err,populatedTweets)=>{
            res.status(200).send(populatedTweets);

        })
    })
};
const getTweet = (req, res) =>{
    const Id = req.params.id;
    Tweet.find({_id : Id}, "content")
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        send.status(500);
    })
};
const newTweet = (req, res) =>{
    //res.send("Crear Usuario");
    const tweet = {
        content: req.body.content,
        user: req.body.user
    };
    if (tweet.content && tweet.user){
        const object = new Tweet(tweet);
        object.save()
        .then((response)=>{
            res.status(201).send(`El content fue creado con Id: ${response._id}`);
        })
        .catch((err)=>{
            send.sendStatus(500);
        })
    }else{
        send.sendStatus(500);
    }

};
const updateTweet = (req, res) =>{
    res.send("Modificar Usuario");
};
const deleteTweet = (req, res) =>{
    //res.send("Borrar Usuario");
    //const Id = req.params.id;
    Tweet.remove({}) // _id : Id
    .then(()=>{
        res.status(200).send("Eliminado Correctamente");
    })
    .catch((err)=>{
        send.status(500);
    })
};

module.exports = {getAll, getTweet, newTweet, updateTweet, deleteTweet};