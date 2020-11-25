const express = require('express');
/*const crypto = require('crypto');
const connection = require('./database/connection');*/
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.get('/users', UserController.list)

routes.get('/users/:id', UserController.show)

routes.post('/users',UserController.create)

routes.put('/users/:id',UserController.update)

routes.delete('/users/:id',UserController.delete)


/*routes.get('/users',async(req, res)=>{
    const users = await connection('users').select('*');
    res.json(users);
})*/

/*routes.post('/users',async(req, res)=>{
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    /*console.log(params);*
    res.json({id})
})*/

/*routes.post('/users',(req, res)=>{
    const params = req.body;
    console.log(params);
    res.json(params);
})*/

/*routes.post('/users/:id',(req, res)=>{
    const params = req.params;
    console.log(params);
    res.json(params);
})

routes.get('/users',(req, res)=>{
    const params = req.query;
    console.log(params);
    res.json(params);
})*/

module.exports = routes;