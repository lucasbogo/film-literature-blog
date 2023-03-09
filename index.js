const path = require('path');

const express = require('express');

const expressEdge = require('express-edge');

const app = express();

app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home');
    });

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html');
    });

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/pages/contact.html');
    });

app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/pages/post.html');
    });

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });