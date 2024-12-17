const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hey this jenkins is workiing on portal 4000')
})
app.listen(4000,'0.0.0.0',()=>{
    express.response.send("Listning on Port 4000")
})

