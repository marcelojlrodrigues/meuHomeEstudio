const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter')

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static('./public'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', indexRouter);

app.listen(80, () => console.log('Servidor funcionando na porta 80'))