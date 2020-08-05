 const express = require('express');
 const mongoose = require('mongoose');
 const app = express();

 app.set("view engine", "ejs");
 app.use(express.urlencoded({extended: false}));

//connect mongoose server
mongoose.connect("mongodb://localhost:27017/SMG",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const gaame = require("/game");
app.use(gaame);


app.get('/', (req, res, next)=>{
    res.sendFile(__dirname + "/index.html");
  });

app.post("/", (req, res, next)=>{

});


const port = process.env.PORT || 3004;
app.listen(port, () =>{
    console.log(`This server is running on https://localhost:${port}`);  
})