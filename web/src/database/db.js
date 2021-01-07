const Database = require('sqlite-async');


function execute(db){
  return db.exec(`
    CREATE TABLE IF NOT EXISTS procedimentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      descricao TEXT,
      vantagens TEXT,
      risco TEXT,
      preco INTEGER
    );
    
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT, 
      numero TEXT,
      email TEXT,
      senha TEXT
    );

    CREATE TABLE IF NOT EXISTS solicitacoes(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      numero TEXT,
      email TEXT,
      procedimentos TEXT
    );
  `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)