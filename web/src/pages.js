const procedimentos = require('./database/fakedataproc')
const solicitacoes = require('./database/fakedatasolic')

module.exports = {

  index(req, res){
    return res.render('index', { procedimentos })
  },

  julyanCadastros(req, res){
    return res.render('julyanCadastros')
  },

  julyanSolicitacoes(req, res){
    return res.render('julyanSolicitacoes', { solicitacoes })
  },

  logedScreen(req, res){
    return res.render('logedScreen', { procedimentos })
  },

  singIn(req, res){
    return res.render('singIn')
  },

  singUp(req, res){
    return res.render('singUp')
  }

}