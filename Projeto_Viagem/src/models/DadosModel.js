var database = require("../database/config");

function listarDados() {
    var instrucao = `
        select count(id) as total_historia from historia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarDados
}
