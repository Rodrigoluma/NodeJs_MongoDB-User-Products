const Usuario = require('../models/usuario.model')

module.exports = {

   async index(req, res){
        //vai retornar todos os usuarios
        const user = await Usuario.find();
        res.json(user);
    },
    //vai receber info que etá dentro de usuario.model - o async faz com que ela só dê return após o await
     async create(req, res){
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;

        let data = {};
//verificar se usuario já existe (pelo email) await pra fazer o cadastro depois
        let user = await Usuario.findOne({email_usuario});
        //se não existir ele cadastra o user
        if(!user){
            data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};
            //await pra garantir que user existe. 
            user = await Usuario.create(data);
            return res.status(200).json(user);

        }else{
            return res.status(500).json(user);
        }
    },
    async details(req, res){
        const {_id} = req.query;
        //vai retornar detalhes do usuario pelo id
        const user = await Usuario.findOne({_id});
        res.json(user);
    },
    //deletar usuario
    async delete(req, res){
        const {_id} = req.params;

        const user = await Usuario.findByIdAndDelete({_id});

        return res.json(user);
    }
}