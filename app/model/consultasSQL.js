class consultar{
  constructor(connection){
    this.connection = connection;
  }
  All_dicionario(callback){//seleciona todas as palavras
    this.connection.query("SELECT * FROM Dicionario",callback);
  }
  pesquisarPalavra(palavra, callback){
   this.connection.query("SELECT * FROM Dicionario WHERE palavra like'%"+palavra+"' OR traducao like '%"+palavra+"'", callback); 
  }
}

module.exports = function() {
  return consultar;
}