const crypto = require('crypto');
const connection = require('../database/connection');
const routes = require('../routes');

module.exports = {
    async create(req, res){
        const {descricao, usuarioid, produtosid, totalcompra} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('bag').insert({
            id,
            descricao,
            usuarioid,
            produtosid,
            totalcompra
        })
        return res.json({id})
    },
    async show(req, res){
        const {id} = req.params;
        const bag = await connection('bag')
                    .where('id', id)
                    .select('*');
        return res.json(bag);
    },
    async list(req, res){
        const bags = await connection('bag').select('*');
        return res.json(bags);
    }
}