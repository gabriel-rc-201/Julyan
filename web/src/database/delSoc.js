const Database = require('./db.js');

  async function deleteSolicitacao(id){
    const db = await Database;
    await db.exec(`
      DELETE * FROM solicitacoes WHERE id = "${id}"
    `)
    return console.log('deu bom')
  }
module.exports = deleteSolicitacao;