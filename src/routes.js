const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers')

routes.get('/', Usuario.index)

//------------------------ROTAS DE USUÁRIOS
//quando faz o posto para o caminho /usuarios e chama função criar usuario
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details:_id', Usuario.details);
module.exports = routes;
