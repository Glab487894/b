const UserInfo = require('../db/models/user');

module.exports = {
    async get(req, res){
        try {
            console.log(123, req.headers["x-access-token"]);

            const user = await UserInfo.find((err) => {
                console.log(err);
            });

            res.status(200).send({
                message: "object has been got",
                data: user
            });
        }catch (error) {
            res.status(400).send(`GET error and ${error}`);
        }
    },

    async patch(req, res){
        try {
            const info = req.body.info;
            const newInfo = req.body.newInfo;
            const update = UserInfo.updateMany({info: info}, {info: newInfo}, (err) => {
                console.log(err);
            });

            res.status(200).send({
                message: "Info has been update",
                data: update
            });
        }catch (error) {
            res.status(400).send(`PATCH error and ${error}`);
        }
    },

    async delete(req, res){
        try{
            let id = req.body.id;
            const remove = await UserInfo.deleteOne({_id: id});

            res.status(200).send({
                message: "Information removed",
                data: remove
            });
        }catch (error) {
            res.status(400).send(`DELETE error and ${error}`);
        }

    }
}
