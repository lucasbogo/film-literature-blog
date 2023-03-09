const path = require('path');

const express = require('express');

const expressEdge = require('express-edge');

const app = express();

app.use(expressEdge);

app.get('/', (req, res) => {
    res.render('index');
    });

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
    });

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
    });

app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/views/post.html');
    });

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });