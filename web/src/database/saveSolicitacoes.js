function saveSolicitacao(db, solicitacao){
  return db.run(`
    INSERT INTO solicitacoes(
      nome,
      numero,
      email,
      procedimentos
    ) VALUES (
      "${solicitacao.nome}",
      "${solicitacao.numero}",
      "${solicitacao.email}",
      "${solicitacao.procedimentos}"
    );
  `)
}

module.exports = saveSolicitacao;