const express = require('express')
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3000
const linkRouter = require('./routes/linkRoute');


mongoose.connect(process.env.MONGO_URL)

let db = mongoose.connection;

db.on('error', () => {
    console.log("Houve Algum Erro");
});
db.once('open', () => {
    console.log('Banco Carregado');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));


app.use('/', linkRouter)


app.listen(PORT, () => console.log(`Example app listening on port port!`))

