const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require ('cors');
const AuthRouter =require('./routes/AuthRouter');
const ProductsRouter =require('./routes/ProductRouter');

require('dotenv').config();
require('./models/db');


const PORT = process.env.PORT || 5000;


app.get('/ping',(req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/products',ProductsRouter)


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})