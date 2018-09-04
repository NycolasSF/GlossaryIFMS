class consultar{
  constructor(connection){
    this.connection = connection;
  }
  All_dicionario(callback){//seleciona todas as palavras
    this.connection.query("SELECT * FROM Dicionario",callback);
  }
  pesquisarPalavra(palavra, callback){
   this.connection.query("SELECT * FROM Dicionario WHERE palavra like'%"+palavra+"%' OR traducao like '%"+palavra+"%'", callback); 
  }
  login(email, senha, callback){
    this.connection.query("SELECT * FROM Admins WHERE email_admin = '"+email+"' and senha_admin = '"+senha+"' ", callback)
  }
  palavrasAdmin(nome, callback){
    this.connection.query("SELECT * FROM Dicionario WHERE autor = (SELECT id_admin FROM Admins where nome_admin = '"+nome+"')", callback)
  }

  
}

module.exports = function() {
  return consultar;
}