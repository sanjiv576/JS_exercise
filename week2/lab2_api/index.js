require('dotenv').config();

const express = require('express');
const maths_routes = require('./routes/maths_routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/maths/', maths_routes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port : ${port}`);
});

