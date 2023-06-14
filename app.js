//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();


const mongoose = require("mongoose");
mongoose.connect("mongodb://myUserAdmin:2001@127.0.0.1:27017/surveyDB?authSource=admin",{ useNewUrlParser: true});
mongoose.connection
   .once("open", () => console.log("Connected"))
   .on("error",error =>{
     console.log("Your error",error);
   });
            

const surveySchema = new mongoose.Schema({
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: String

});

const Survey = mongoose.model("Survey",surveySchema);

const survey = new Survey({
    q1: 3,
    q2: 4,
    q3: 5,
    q4: 3,
    q5: "Connect new people"
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html")
});
var arr=[];

app.get("/Q1.html",function(req,res){
    res.sendFile(__dirname+"/Q1.html");
});
app.post("/Q1.html",function(req,res){
  const Q1 = req.body.name;
  arr.push(Q1);
});
app.get("/Q2.html",function(req,res){
    res.sendFile(__dirname+"/Q2.html");
});
app.post("/Q2.html",function(req,res){
  const Q2 = req.body.name;
  arr.push(Q2);
});
app.get("/Q3.html",function(req,res){
    res.sendFile(__dirname+"/Q3.html");
});
app.post("/Q3.html",function(req,res){
  const Q3 = req.body.name;
  arr.push(Q3);
});
app.get("/Q4.html",function(req,res){
    res.sendFile(__dirname+"/Q4.html");
});
app.post("/Q4.html",function(req,res){
  const Q4 = req.body.name;
  arr.push(Q4);
});
app.get("/Q5.html",function(req,res){
    res.sendFile(__dirname+"/Q5.html");
});
app.post("/Q5.html",function(req,res){
  const Q5 = req.body.feedback;
  arr.push(Q5);
});

const survey1 = new Survey({
  q1: arr[0],
  q2: arr[1],
  q3: arr[2],
  q4: arr[3],
  q5: arr[4]
});
survey1.save();

Survey.insertMany(survey1).then(() => console.log("Added successfully"))
.catch((err) => {console.error(err);});


app.get("/ThankYou.html",function(req,res){
    res.sendFile(__dirname+"/ThankYou.html");

});



app.listen(3000,function(){
   console.log("Server is runnig on the port 3000.");
});






