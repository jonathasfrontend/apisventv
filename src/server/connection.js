const mongoose = require('mongoose');

function ConnectBD(){
  mongoose.connect('mongodb+srv://root:dFrPbwloK4qEAnKy@cluster0.xvdlp.mongodb.net/tvchannels?retryWrites=true&w=majority')
  .then(()=>{console.log("Banco de dados conectado!")})
  .catch(()=>{console.log("Falha ao conectar com o banco!")});
}

module.exports = ConnectBD()