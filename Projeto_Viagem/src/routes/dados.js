var express = require("express");
var router = express.Router();

var DadosController = require("../controllers/DadosController");

router.get("/listar", function (req, res) {
    DadosController.listarDados(req, res);
});

module.exports = router;