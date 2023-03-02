
const express= require("express");
//const routes=require('./routes/api');
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

//set up express app
const app = express();
mongoose.set("strictQuery", false);
//connect to mongodb

mongoose.connect(process.env.mongodb_url);
//.then((result)=>app.listen(4000))
//.catch((err)=>console.log(err));

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
//app.use(function(err,req,res,next){
     //console.log(err);
     //res.status(422).send({error: err.message});
//})

app.listen((process.env.port_Number),function(){
    console.log("listening Req")
});
/*
app.get('/api',function(req,res){
    console.log("GET request");
    res.send({name: 'Rupa'});
});

*/ 

//listen for requests

