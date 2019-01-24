const express = require('express')
const app = express()
var path = require('path');
es6Renderer = require('express-es6-template-engine');
const port = 3000

app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use('/static', express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.get('/blusas', (req, res) => res.render('blusas'))

app.get('/catalogo/:idcatalogo', (req, res) => (req.params.idcatalogo == 1 ) ? res.send(req.params) : res.render('blusas'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))