
const express= require("express");
//const routes=require('./routes/api');
const bodyParser=require("body-parser");
const mongoose=require('mongoose');

//set up express app
const app = express();
mongoose.set("strictQuery", false);
//connect to mongodb
const dbURI='mongodb+srv://Rupa:test1234@cluster0.ljdy3hs.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true,useUnifiedTopology: true}).then((result)=>console.log('connected'))
//.then((result)=>app.listen(4000))
.catch((err)=>console.log(err))
mongoose.Promise=global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
//app.use(function(err,req,res,next){
     //console.log(err);
     //res.status(422).send({error: err.message});
//})

app.listen((3000),function(){
    console.log("listening Req")
});
/*
app.get('/api',function(req,res){
    console.log("GET request");
    res.send({name: 'Rupa'});
});

*/ 

//listen for requests

