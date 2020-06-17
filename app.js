const express = require('express')
const app = express()
const port = 3000


app.use(express.static('frontend'));

app.get('/', (req,res) =>
    res.send('hello world')
 )


app.listen(port, () => 
    console.log(`example app listening at http://localhost:${port}`)
)