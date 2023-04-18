require('dotenv').config();
const express = require('express');
const myPaths = require('./routes/paths');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', myPaths);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});