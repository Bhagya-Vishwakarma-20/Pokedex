const express = require('express');
const path = require('path');
const indexRoute= require('./routes/indexRoute');
require('dotenv').config();


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


app.use('/',indexRoute);
app.listen(process.env.PORT);










