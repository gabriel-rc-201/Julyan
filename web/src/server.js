// importando dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages')
// iniciando o express
const server = express();

server
  // utilizar body do req
  .use(express.urlencoded({ extended: true }))
  // utilizando os arquivos estáticos
  .use(express.static('public'))

  // configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // rotas da aplicação
  .get('/', pages.index)
  .get('/julyanCadastros', pages.julyanCadastros)
  .get('/julyanSolicitacoes', pages.julyanSolicitacoes)
  // .get('/logedScreen', pages.logedScreen)
  .get('/singIn', pages.singIn)
  .get('/singUp', pages.singUp)
  .post('/cadastrarProcedimento', pages.cadastrarProcedimento)
  .post('/cadastrarCliente', pages.cadastrarCliente)
  .post('/login', pages.login)
  .post('/solicitacao', pages.solicitacao)
  .post('/deleteSolicitacao', pages.deleteSolicitacao)

// ligar o servidor
server.listen(5500);