const express = require('express');
const routes  = express.Router();
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

routes.get('/ongs', OngController.index);
//CRIANDO A PRIMEIRA ROTA, APENAS / PORQUE É A RAIZ E ELA VAI RECEBER UMA FUNÇÃO COMO PARÂMETRO
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);
//EXPORTANDO AS ROTAS DE DENTRO DESTE ARQUIVO PARA IMPORTAR EM OUTRO LUGAR
module.exports = routes;