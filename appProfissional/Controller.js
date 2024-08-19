// Importar módulos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importar o módulo cors
// const models = require ('models');

let app = express();


// Usar middleware
app.use(cors());  // Habilitar CORS
app.use(bodyParser.urlencoded({ extended: false }));  // Aqui é para fazer requisições post
app.use(bodyParser.json());  // Aqui em Json



app.post('/create', async(rqs,res)=>{
    console.log(rqs.body.rua)
});




// Definir a porta e iniciar o servidor
let port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
   
});
