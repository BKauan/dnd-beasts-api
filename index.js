require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();


// Habilitando a leitura do JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

// Rotas API
const beastRoutes = require('./routes/beastRoutes')

app.use('/beast', beastRoutes) 

// Conexão com o banco
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
const DB_LINK = process.env.DB_LINK

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_LINK}`)
.then(() => {
    console.log('Conexão bem sucedida!');
    app.listen(3000);
})
.catch(err => console.log(err));











// mongodb+srv://bruno:tMIJPGrC9zsCgjwl@dndbeastsapi.evqwxnv.mongodb.net/dndbeastapi?retryWrites=true&w=majority&appName=DndBeastsApi