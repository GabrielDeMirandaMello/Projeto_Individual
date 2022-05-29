var database = require("../database/config");

function listar() {
    var instrucao = `
        select nome, urlImagem, descricao from historia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
}
