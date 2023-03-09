const path = require('path');
const express = require('express');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');

const app = new express();

mongoose.connect('mongodb://localhost:27017/node-js-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

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