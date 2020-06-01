const UserInfo = require('../db/models/user');

module.exports = {
    async get(req, res){
        const user = await UserInfo.find((err) => {
            console.log(err);
        });
        res.status(200).send(user);
    },

     async post(req, res){
         UserInfo.create({
             username: "glab_16",
             name: "glab",
             lastname: "strizhkov",
             email: "glabstrizhkov@gmail.com",
             info: "other text"
         }, (err) => {
             console.log(err);
         })
         res.status(200).send("post");
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
