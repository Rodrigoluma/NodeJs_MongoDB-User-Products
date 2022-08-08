const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes')

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/Testedados',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    //versão mais nova do mongodb dá erro com esse comando
    /* useFindAndModify:false */
}, function (err){
    if (err){
        console.log('err')
    }else{
        console.log('conectado com sucesso!')
    }
});

//serve pra nformar quais domínios podem consumir os dados dessa API
app.use(cors());

app.use(cookieParser());

app.use(express.json());

//ligação com o arquivo e rotas get/post, etc
app.use(routes);

app.listen(port, function(){
    console.log(`rodando na porta ${port}`);
})