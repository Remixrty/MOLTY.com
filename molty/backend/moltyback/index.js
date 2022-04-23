const express = require('express');
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('port')

const start = async () =>
 {
  try{
      mongoose.connect()

    app.listen(PORT, ()=>
    {
      console.log("server started on port", PORT);
    })
  }
  catch(e) {
    
  }


 }

 start()