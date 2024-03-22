const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./router/index')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express()
const PORT = process.env.PORT || 6006

console.log('started on port', PORT)
console.log(process.env.DB_URL);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true
  }
))
app.use('/api', router)

app.use(errorMiddleware)

const start = async () =>
 {
  try{
    await mongoose.connect(process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    app.listen(PORT, ()=>
    {
      console.log("server started on port", PORT);
    })
  }
  catch(e) {
    console.log(e);
  }
 }

 start()