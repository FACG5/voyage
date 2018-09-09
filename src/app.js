const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const router = require('./controllers/index');
const path = require('path');

// handlebar options
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
}));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
