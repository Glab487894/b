const UserInfo = require('../db/models/user');

module.exports = {
    async get(req, res){
        const user = await UserInfo.find();
        res.status(200).send(user);
    },

    async add(req, res){
        res.status(200).send("user");
    },

    async update(req, res){
        res.status(200).send("user");
    },

    async delete(req, res){
        res.status(200).send("user");
    }
}
