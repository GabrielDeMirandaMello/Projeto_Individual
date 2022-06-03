var express = require("express");
var router = express.Router();

var DadosController = require("../controllers/DadosController");

router.post("/listarDados", function (req, res) {
    DadosController.listarDados(req, res);
});

module.exports = router;