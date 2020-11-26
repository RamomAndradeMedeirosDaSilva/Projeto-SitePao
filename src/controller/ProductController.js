const crypto = require('crypto');
const connection = require('../database/connection');
const routes = require('../routes');

module.exports = {
    async create(req, res){
        const {name, descricao, quantidade, preco} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('products').insert({
            id,
            name,
            descricao,
            quantidade,
            preco
        })
        return res.json({id})
    },
    async show(req, res){
        const {id} = req.params;
        const product = await connection('products')
                    .where('id', id)
                    .select('*');
        return res.json(product);
    },
    async list(req, res){
        const products = await connection('products').select('*');
        return res.json(products);
    }
}