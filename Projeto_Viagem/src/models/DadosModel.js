var database = require("../database/config");

function listarDados() {
    var instrucao = `
        select * from historia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarDados
}
