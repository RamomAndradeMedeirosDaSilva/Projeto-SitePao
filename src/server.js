const express = require('express');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3002);

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db.sqlite', (err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('conectando com sucesso!!!')
});

/**
 * Driver: Select * from users;
 * Query Builders: table('users').select('*').where('')
 */

/**
 * GET: buscar/lista uma informação no backEnd
 * POST: Criar uma informação no backEnd
 * PUT: Alterar uma informação no backEnd
 * DELETE: Deletar uma informção no backEnd
 */

/**
 * Parâmetros
 * Query: parametros nomeados enviados na rota
 * Route params: parametros utilizados para identificar um recusrso
 * Request Body: corpo da Requisição
 */

/*app.get('/users',(req, res)=>{
    const params = req.query;
    console.log(params);
    res.json({
        nome: 'Ramom',
        Empresa: 'UESB'
    })
})*/

/*app.post('/users',(req, res)=>{
    res.json({
        nome: 'Ramom',
        Empresa: 'UESB'
    })
})*/

/*app.get('/',(req, res)=>{
    res.send('Helo word!! - Ramom 2')
})*/