
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')




// DB connection
mongoose.connect(process.env.DATABASE_URL,  { useUnifiedTopology: true, useNewUrlParser : true } );
const db = mongoose.connection
db.on('error', (error) => console.error(error)) // ? 
db.once('open', (error) => console.log('Conntected to Databases')) // ? 

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));


const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter);






app.listen(3000, ()=>console.log('server started'))
