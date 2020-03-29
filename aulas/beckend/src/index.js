const express = require('express'); //Importando o módulo express para uma variável
const cors = require('cors'); //Define quem poderá acessar a API
const app = express();//Aqui será a instância da aplicação, pra rodar, no terminal digita node index.js
const routes = require('./routes');//Importando as rotas arquivo precisa ter "./" antes, pois se tiver só o nome é considerado pacote

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);//Vai ouvir a porta 3333, ou seja, quando quiser acessar a aplicação digita localhost:3333