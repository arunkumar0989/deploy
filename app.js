const express = require('express');
const path = require('path');
const app = express();

const test = path.join(__dirname, './html/test.html');
const prep = path.join(__dirname, '../preparation_views')

app.use(express.static(prep));

app.get('/', (req, res) => {
    res.sendFile(test);
})

app.listen(process.env.PORT||3000);
