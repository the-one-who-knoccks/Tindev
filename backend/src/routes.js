const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();





/*routes.get('/', (req, res)=>{ // Refatorando código, trocamos o server.get por routes.get
    //req.query.name;  Pega um parâmetro enviado pelo usuário através do navegador
    //return res.send(`Hello, ${req.query.name}`); //Envia uma resposta ao navegador
    return res.json({ message: `Olá ${req.query.name}`});
});*/

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

/*(req, res)=>{
    console.log(req.body);

    return res.json (req.body);
})*/

module.exports = routes;