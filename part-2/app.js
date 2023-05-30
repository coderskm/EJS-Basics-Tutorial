const express = require('express');
const app = express();
const router = require('./routes/web');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, () => console.log(`server listening on port ${port}`));