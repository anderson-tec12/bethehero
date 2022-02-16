const express = require('express')

const  {celebrate, Segments, Joi} = require ('celebrate')
// const crypto = require('crypto')

// const connection = require('./database/connection')
const routes = express.Router()


const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// routes.post('/ongs', celebrate({
//     [Segments.BODY]:Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().required().email(),
//         whatsapp: Joi.number().required().min(10).max(11),
//         city:Joi.string().required(),
//         uf:Joi.string().required().length(2),
//     })
// }) ,OngController.create)
// routes.get('/ongs', OngController.index)


// routes.post('/incidents', IncidentsController.create)
// routes.get('/incidents',celebrate({
//     [Segments.QUERY]: joi.object().keys({
//         page:joi.number()
//     })
// }), IncidentsController.index)

// routes.delete('/incidents/:id', celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id:joi.number().required()
//     })
// }),IncidentsController.delete)

// routes.get('/profile',celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization:Joi.string().required()
//     }).unknown()
// }), ProfileController.index)


routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)


routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.index)

routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionController.create)

module.exports = routes