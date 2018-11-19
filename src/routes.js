const express = require('express')

const routes = express.Router()
const PacientesMultimedController =
    require('../src/controllers/PacienteMultimedController')
const Exames = require('../src/controllers/medilab/Exames')
const cd = require('../src/controllers/medilab/cd')

routes.get("/multimed", PacientesMultimedController.consulta)
routes.get("/medilab", Exames.consulta)
routes.get("/cd", cd.consulta)

module.exports = routes