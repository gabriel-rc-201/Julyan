// importando dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages')
// iniciando o express
const server = express();

server
  // utilizando os arquivos estáticos
  .use(express.static('public'))

  // configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // rotas da aplicação
  .get('/', pages.index)
  .get('/julyanCadastros', pages.julyanCadastros)
  .get('/julyanSolicitacoes', pages.julyanSolicitacoes)
  .get('/logedScreen', pages.logedScreen)
  .get('/singIn', pages.singIn)
  .get('/singUp', pages.singUp)

// ligar o servidor
server.listen(5500);