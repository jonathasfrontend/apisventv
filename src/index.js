const ConnectBD = require('./server/connection')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set('view engine', 'html');

app.use('', require('./routes/main'));

ConnectBD

app.listen(process.env.PORT || port,()=>{
    console.log(`Aplicação rodando, porta:${port}`);
})
