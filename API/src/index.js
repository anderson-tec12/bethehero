const express = require('express');
const cors = require('cors')
const { errors } =require('celebrate')
const routes = require('./routes')
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

/**
 * Query Params: Parametros nomeados enviados na rota apos o ? (filtros,paginação)
 * Route Params: Parametros utilizados para identificar recursos (/user/id)
 * Request Body: Corpo da requisição, utilizado por criar ou alterar recursos
 */


app.listen(3334)