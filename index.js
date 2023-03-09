const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
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