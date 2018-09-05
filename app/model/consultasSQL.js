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
    this.connection.query("SELECT * FROM Dicionario WHERE autor = (SELECT id_admin FROM Admins where nome_admin = '"+nome+"') limit 5 ", callback)
  }
  palavrasTodasAdmins(callback){
    this.connection.query("SELECT * FROM Dicionario, Admins where autor = id_admin", callback);
  }
  cadastro_palavra(palavra, traducao, img_palavra, exemplo_portugues, exemplo_ingles, id_autor, callback){
    this.connection.query("INSERT INTO Dicionario VALUES (0, '"+palavra+"', '"+traducao+"', '"+img_palavra+"', '"+exemplo_portugues+"', '"+exemplo_ingles+"', "+id_autor+")", callback);
  }
  id_admin(email, callback){
    this.connection.query("SELECT id_admin FROM Admins where email_admin = 'nycolassilvafroes@gmail.com' ", callback);
  }


}

module.exports = function() {
  return consultar;
}
