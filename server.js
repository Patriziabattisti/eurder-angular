const express = require('express');
const app = express();

app.use(express.static('./dist/angular-eurder'));

app.listen(process.env.PORT || 8080);
