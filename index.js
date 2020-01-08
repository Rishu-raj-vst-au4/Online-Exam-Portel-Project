const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

const controller = require('./Controller/controller');
console.log(controller);

// Requireing and registiering the express-handlebars:

app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');


app.get('/', function(req, res) {
    res.render('Landing');
})
app.get('/signup', function(req, res) {
    res.render('signup');
})
app.post('/signup', controller.add);

app.listen(port, function() {
    console.log("App is at port", port)
});