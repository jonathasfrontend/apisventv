const mongoose = require('mongoose');
require('dotenv').config();

function ConnectBD(){
  mongoose.connect(process.env.LINK_CONNECTION_MONGODB)
  .then(()=>{console.log("Banco de dados conectado!")})
  .catch(()=>{console.log("Falha ao conectar com o banco!")});
}

module.exports = ConnectBD()