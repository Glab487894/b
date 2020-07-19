const UserInfo = require('../db/models/user');

module.exports = {
    async singUp(req, res){
        try{
            const email = req.body.email;
            const password = req.body.password;

            const user = await UserInfo.findOne({email});
            if(user) {
                return res.status(200).send({
                    message: `The user ${email} is exist`
                })
            } else {
                const create = UserInfo.create({email, password}, (err) => {
                    console.log(err);
                });

                res.status(200).send({
                    message: "object has been created",
                    data: create
                });
            }


        } catch (error) {
            res.status(400).send(`authorization error and ${error}`);
        }
    },

    async singIn(req, res){
        try{
            const email = req.body.email;
            const password = req.body.password;

            const user = await UserInfo.findOne({email});

            //пользователь отсудтвует в базе данных
            if(user === null){
                return res.status(200).send('No such user !');
            }
            //Авторизация успешна
            if(user.password === password){
                return res.status(200).send('OK !');
            } else {
                //авторизаця провалена
                return res.status(200).send('NO !');
            }
        } catch (error) {
            res.status(400).send(`authorization error and ${error}`);
        }
    }
}