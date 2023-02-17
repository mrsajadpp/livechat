var express = require('express');
var router = express.Router();

router.get('/:user', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})