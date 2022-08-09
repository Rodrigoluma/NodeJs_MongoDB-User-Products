const Produto = require('../models/produto.model')

module.exports = {

   async index(req, res){
        //vai retornar todos os usuarios
        const product = await Produto.find();
        res.json(product);
    },
    //vai receber info que etá dentro de Produto.model - o async faz com que ela só dê return após o await
     async create(req, res){
        const {nome_produto, descricao_produto, preco_produto, qtd_produto} = req.body;

        let data = {};
//verificar se usuario já existe (pelo email) await pra fazer o cadastro depois
        let product = await Produto.findOne({nome_produto});
        //se não existir ele cadastra o product
        if(!product){
            data = {nome_produto, descricao_produto, preco_produto, qtd_produto};
            //await pra garantir que product existe. 
            product = await Produto.create(data);
            return res.status(200).json(product);

        }else{
            return res.status(500).json(product);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        //vai retornar detalhes do usuario pelo id
        const product = await Produto.findOne({_id});
        res.json(product);
    },
    //deletar usuario
    async delete(req, res){
        const {_id} = req.params;

        const product = await Produto.findByIdAndDelete({_id});

        return res.json(product);
    },
    //atualização de dados do product
    async update(req, res){
        const {_id, nome_produto, descricao_produto, preco_produto, qtd_produto} = req.body

        const data = {nome_produto, descricao_produto, preco_produto, qtd_produto};
        
        const product = await Produto.findOneAndUpdate({_id}, data, {new:true});

        res.json(product);
    }
}