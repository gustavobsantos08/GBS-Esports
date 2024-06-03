var database = require("../database/config");

function buscarAquariosPorEmpresa(esporteId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_esporte = ${esporteId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_esporte) aquario VALUES (${descricao}, ${esporteId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
