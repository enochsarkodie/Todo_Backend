const express = require('express');
const dotenv = require('dotenv').config();
const {default :mongoose} = require('mongoose');


const app = express();
const port = process.env.PORT;

mongoose.connect("mongodb://localhost:27017/Todo",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Database Connection successfull!!"))
  .catch(err=>console.error('Error connecting to the database...',err));

app.use(express.json());
app.use('/todos/',require('./routes/todoRoutes'));

app.listen(port, ()=> {
    console.log('listening to http://localhost:8000')
});
