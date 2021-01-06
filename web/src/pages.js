module.exports = {

  index(req, res){
    return res.render('index')
  },

  julyanCadastros(req, res){
    return res.render('julyanCadastros')
  },

  julyanSolicitacoes(req, res){
    return res.render('julyanSolicitacoes')
  },

  logedScreen(req, res){
    return res.render('logedScreen')
  },

  singIn(req, res){
    return res.render('singIn')
  },

  singUp(req, res){
    return res.render('singUp')
  }

}