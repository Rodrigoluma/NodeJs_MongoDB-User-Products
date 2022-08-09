const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');
const Produto = require('./controllers/produtos.controllers');

routes.get('/', Usuario.index);

//------------------------ROTAS DE USUÁRIOS
//quando faz o posto para o caminho /usuarios e chama função criar usuario
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes. put('/api/usuarios', Usuario.update);

//--------------------ROTAS PARA PRODUTOS
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtos.details/:_id', Produto.details);
routes.delete('/api/produtos/:_id', Produto.delete);
routes. put('/api/produtos', Produto.update);

module.exports = routes;
