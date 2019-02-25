const express = require("express");

const routes = express.Router();
const PacientesMultimedController = require("../src/controllers/PacienteMultimedController");
const Exames = require("../src/controllers/medilab/Exames");
const cd = require("../src/controllers/medilab/cd");

const teste = require("./teste");

routes.get("/multimed", PacientesMultimedController.consulta);
routes.get("/multimed/:id", PacientesMultimedController.consultaID);
routes.get("/multimed/laudo/:id", PacientesMultimedController.retornaLaudo);
routes.get("/medilab", Exames.consultaExamesPeriodo);
routes.get("/medilabId", Exames.consultaAN);
routes.get("/cd", cd.consulta);
routes.get("/cdId", cd.consultaAN);
routes.get("/pacientePeriodo", cd.consultaNomePeriodo);

routes.get("/teste", teste.info);

module.exports = routes;
