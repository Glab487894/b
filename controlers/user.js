const UserInfo = require('../db/models/user');

module.exports = {
    async get(req, res){
        const user = await UserInfo.find();
        res.status(200).send(user);
    },

     async post(req, res){
         UserInfo.create({
             username: "glab_16",
             name: "glab",
             lastname: "strizhkov",
             email: "glabstrizhkov@gmail.com",
             info: "other text"
         })
         res.status(200).send("post");
     },

    async patch(req, res){
        UserInfo.updateOne({info: "other text"}, {
            $push : {text: "new Text"}
        })
        res.status(200).send("patch");
    },

    async delete(req, res){
        UserInfo.deleteOne({info: "other text"})
        res.status(200).send("delete");
    }
}
