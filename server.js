const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
require("dotenv").config();
const nodemon = require("nodemon")
const Content = require("./schema");
const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}))

console.log(Content)
const password = process.env.PASSWORD;
app.use(bodyParser.json())
app.use(cors())
mongoose
  .connect("mongodb+srv://aluricharan1922:"+password+"@cluster0.ulcn1do.mongodb.net/firstdb?retryWrites=true&w=majority" )
  .then(() => {
    console.log("mongodb connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
// Create an Express application

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/retrive",(req,res)=>{
  console.log(req)
});
app.post("/add",(req,res)=>{
  console.log("data from front end",req.body)
  const {name,passcode} = req.body;
  const newData = new Content({
    name,passcode
  })
  newData.save()
  console.log("data saved succesfully")
})
// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
