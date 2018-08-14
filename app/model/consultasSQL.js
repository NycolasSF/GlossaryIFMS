class consultar{
  constructor(connection){
    this.connection = connection;
  }
  All_dicionario(callback){//seleciona todas as palavras
    this.connection.query("SELECT * FROM Dicionario",callback);
  }
}

module.exports = function() {
  return consultar;
}