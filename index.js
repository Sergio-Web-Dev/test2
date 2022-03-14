const express = require('express')
const hdb = require('express-handlebars'); 
const app = express()

app.engine('handlebars', hdb.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function(request, response){
    var products = [{id:1, title:"Camara", price:500},{id:2, title:"monitor", price:800},]
    response.json({
        products: products
    });
})
app.get('/about', function(request, response){
    response.send("<h1>about</h1>"); 
})


app.listen(3000); 
