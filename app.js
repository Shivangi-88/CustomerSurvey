//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();




app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html")
});
app.get("/Q1.html",function(req,res){
    res.sendFile(__dirname+"/Q1.html");
});
app.get("/Q2.html",function(req,res){
    res.sendFile(__dirname+"/Q2.html");
});
app.get("/Q3.html",function(req,res){
    res.sendFile(__dirname+"/Q3.html");
});
app.get("/Q4.html",function(req,res){
    res.sendFile(__dirname+"/Q4.html");
});
app.get("/Q5.html",function(req,res){
    res.sendFile(__dirname+"/Q5.html");
});
app.get("/ThankYou.html",function(req,res){
    res.sendFile(__dirname+"/ThankYou.html");
});




app.listen(3000,function(){
   console.log("Server is runnig on the port 3000.");
});