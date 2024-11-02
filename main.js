const express = require('express')
const dotenv = require('dotenv')
const botendpoints = require('./Routes/routes')
dotenv.config()
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api',botendpoints)
const PORT = process.env.PORT
/* const api = process.env.apikey
console.log("API ",api); */

app.listen(PORT,(req,res)=>{
    console.log(`Server listening at the port ${PORT}`);
    
})

