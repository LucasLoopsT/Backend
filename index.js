const express = require("express");
const connectDatabase = require("./src/js/db.js");
const routes = require("./src/js/routes/routes.js");
 
const app = express()
const port = process.env.PORT || 3000;
//process.env.PORT para indicar a porta utilizada pelo banco

connectDatabase();

app.use(express.json()); // Comando para permitir que a aplicação receba JSON
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));