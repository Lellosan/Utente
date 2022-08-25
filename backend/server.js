
require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const itemRoutes = require('./routes/item')

var cors = require('cors')

app.use(cors())

app.get('/', (req,res)=>{
    res.json({mssg: 'welcome' })
})

app.use(express.json())
//routes
app.use('/api/user',userRoutes)
app.use('/api/item',itemRoutes)

//connect to db
mongoose.connect(process.env.MONGO_UI)
    .then(()=> {
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db,listening on port',process.env.PORT)
        })
    })
    .catch((error)=> {
        console.log(error)
    })


