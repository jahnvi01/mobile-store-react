const express = require('express');
const app = express();
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 app.listen(port, () => {
    console.log('Server is up!');
 });