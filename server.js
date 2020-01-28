/* este arquivo se compromete em colocar o "servidor " front e back para funcionar juntos, ele também lida com 
as rodas dinamicas usando consign, bem como estabelece a porta que ambos os "servidores irão usar;"
*/


const express = require('express');
var consign = require('consign');
const bodyParser = require('body-parser')
const connection = require('./config/dbConnection')
const routes = require ("./app/routes/routes")

const app = express();

app.use(routes)
app.set('view engine', 'react')
app.set('views', './app/views')

//configurando o body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);
module.exports = app



const port = process.env.PORT || 5000;


app.post('/cadastro', (req, res) => {
    connection.query(`INSERT  INTO user (username, lastname, password, email, celphone) VALUES ('${req.body.nome}','${req.body.sobrenome}', '${req.body.senha }', '${req.body.email}', '${req.body.celular}' );`) 
    res.send("<h1> enviado </h1>")

    
});


app.listen(port, () => console.log(`Listening on port ${port}`));