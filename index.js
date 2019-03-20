const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send(`Hello from ${req.headers && req.headers.host}`);
});

app.listen(process.env.PORT || 3000);