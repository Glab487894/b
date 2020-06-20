const UserInfo = require('../db/models/user');

module.exports = {
    async authorization(req, res){
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