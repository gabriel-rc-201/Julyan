function saveCliente(db, cliente){
  return db.run(`
    INSERT INTO clientes(
      nome,
      numero,
      email,
      senha
    ) VALUES (
      "${cliente.nome}",
      "${cliente.numero}",
      "${cliente.email}",
      "${cliente.senha}"
    );
  `)
}

module.exports = saveCliente;