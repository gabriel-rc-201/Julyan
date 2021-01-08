const Database = require('./database/db');
const saveProcedimento = require('./database/saveProcedimento');
const cadastrarCliente = require('./database/saveClient');
const saveSolicitacao = require('./database/saveSolicitacoes');


module.exports = {

  async index(req, res){
    try {
      const db = await Database;
      const procedimentos = await db.all("SELECT * FROM procedimentos")
      return res.render('index', { procedimentos, poupUp: false })      
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados')
    }
  },

  julyanCadastros(req, res){
    return res.render('julyanCadastros')
  },
  
  async cadastrarProcedimento(req, res){
    const fields = req.body
    try {
      const db = await Database 
      await saveProcedimento(db, {
        nome: fields.nome,
        descricao: fields.descricao,
        vantagens: fields.vantagens,
        riscos: fields.riscos,
        preco: fields.preco
      })

      //redirecionamento

      return res.redirect('/')
    } catch (error) {
      console.log(error)  
      return res.send('Erro no banco de dados!!!')
    }
  },

  async julyanSolicitacoes(req, res){
    try {
      const db = await Database;
      const solicitacoes = await db.all("SELECT * FROM solicitacoes")

      return res.render('julyanSolicitacoes', { solicitacoes })
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados')
    }o
  },

  async deleteSolicitacao(req, res){
    const solicitacao = req.body
    try {
      const db = await Database;
      await db.all(`DELETE FROM solicitacoes WHERE id = ${solicitacao.id}`)
      return res.redirect('/julyanSolicitacoes')
      
    } catch (error) {
      console.log(error) 
      return res.send('erro no banco de dados !!!')
    }
  },

  singIn(req, res){
    return res.render('singIn', {userNaoExiste: false, senhaIncorreta: false})
  },

  async login(req, res){
    const { email, senha } = req.body;
    
    try {
      const db = await Database;
      const userExist = await db.all(`SELECT * FROM clientes WHERE email = "${email}"`)

      if (userExist.length === 0){
        return res.render('singIn', { userNaoExiste: true, senhaIncorreta: false })
      }
      else if (!(senha == userExist[0].senha)){
        return res.render('singIn', { senhaIncorreta: true, userNaoExiste: false})
      }
    
      const cliente = userExist[0]
      
      const procedimentos = await db.all("SELECT * FROM procedimentos")
      
      return res.render('logedScreen', { procedimentos, cliente }) 
    
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!!!')
    }
  },

  async solicitacao(req, res){

    const solicitacao = req.body;
    try {
      const db = await Database;
      await saveSolicitacao(db, {
        nome: solicitacao.nome,
        numero: solicitacao.numero,
        email: solicitacao.email,
        procedimentos: solicitacao.procedimentos.toString()
      })      

      const procedimentos = await db.all("SELECT * FROM procedimentos")
      return res.render('index', { poupUp: true,  procedimentos, solicitacao})

    } catch (error) {
      console.log(error);
      res.send("Erro no banco de dados !!!")
    }

  },

  singUp(req, res){
    return res.render('singUp')
  },

  async cadastrarCliente(req, res){
    const fields = req.body
    try {
      const db = await Database
      await cadastrarCliente(db,{
        nome: fields.conta,
        numero: fields.numero,
        email: fields.email,
        senha: fields.senha
      })

      //redirecionamento
      return res.redirect('/')
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!!!')
    }
  }

}