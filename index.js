const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    });

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });