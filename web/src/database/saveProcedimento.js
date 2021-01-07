function saveProcedimento(db, procedimento){
  return db.run(`
    INSERT INTO procedimentos (
      nome,
      descricao,
      vantagens,
      risco,
      preco
    ) VALUES (
      "${procedimento.nome}",
      "${procedimento.descricao}",
      "${procedimento.vantagens}",
      "${procedimento.risco}",
      ${procedimento.preco} 
    );
  `)
}

module.exports = saveProcedimento;