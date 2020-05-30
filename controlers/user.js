const InfoSchema = require('../db/models/user');

module.exports = {
    async main(req, res){
        console.log(111);
        const user = await InfoSchema.find();
        console.log(user);
        res.status(200).send(user);
    }
}