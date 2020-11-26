const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
const ProductController = require('./controller/ProductController');

//Rotas de usuário
routes.post('/users',UserController.create)

routes.put('/users/:id',UserController.update)

routes.get('/users', UserController.list)

routes.get('/users/:id', UserController.show)

routes.delete('/users/:id',UserController.delete)

//Rotas de produto
routes.post('/products', ProductController.create)

routes.get('/products/:id', ProductController.show)

routes.get('/products', ProductController.list)

module.exports = routes;