const express = require('express');
const parser = require('body-parser');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const app = express();
require('./server/config/database');

app.use(express.static(path.join(__dirname,'dist/players')));
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));