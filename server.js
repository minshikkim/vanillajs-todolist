const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/index');




// DB connection
mongoose.connect(config.databaseURL,  { useUnifiedTopology: true, useNewUrlParser : true } );
const db = mongoose.connection
db.on('error', (error) => console.error(error)) // using bulit-in event by defalut eventlistener
db.once('open', (error) => console.log('Conntected to Databases')) // Equivalent to connected (same) 


// using json (if you want, use module body-parser)
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));


const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter);






app.listen(3000, ()=>console.log('server started'))
