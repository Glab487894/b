const UserInfo = require('../db/models/user');

module.exports = {
    async get(req, res){
        const user = await UserInfo.find((err) => {
            console.log(err);
        });

        res.status(200).send(user);
    },

     async post(req, res){
        const userName = req.body.username;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const  email = req.body.email;
        const info = req.body.info;

          UserInfo.create({
             username: userName,
             name: name,
             lastname: lastname,
             email: email,
             info: info
         }, (err) => {
             console.log(err);
         });

         res.status(200).send(userName);
     },

    async patch(req, res){
        UserInfo.updateMany({info: "other text"}, {info: "new text"}, (err) => {
            console.log(err);
        });

        res.status(200).send("patch");
    },

    async delete(req, res){
        UserInfo.remove({info: "other text"}, (err) => {
            console.log(err);
        });

        res.status(200).send("delete");
    }
}
