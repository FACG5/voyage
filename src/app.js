const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const router = require('./controllers/index');
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
}));

app.set("port",process.env.PORT || 4000);


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);


module.exports = app;
