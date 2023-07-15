const express = require('express');
const dotenv = require('dotenv').config();
const {default :mongoose} = require('mongoose');


const app = express();
const port = process.env.PORT;
const DB = process.env.DATABASE
 
mongoose.connect(DB,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  // useFindAndModify:false,

}).then(con =>{
  console.log(con.connections);
  console.log('DB connection Successful');})

app.use(express.json());
app.use('/todos/',require('./routes/todoRoutes'));

app.listen(port, ()=> {
    console.log('listening to http://localhost:8000')
});
