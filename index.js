const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 5000;

//Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
//Parsing middleware
app.use(bodyParser.urlencoded({extended:true}))

//Handle 404
app.use((req, res)=>{
  console.log("Hitting 404")
  res.status(404).send("PAGE NOT FOUND?!");
})

//Handle 500
app.use((err, req, res, next)=>{
  console.log("Oh no something broke...")
  console.error(err.stack);
  res.status(500).send("Internal server error (T^T)");
})

app.get('/', (req, res, next)=>{
  try{
    res.send('We got home!');
  } catch(error){
    next(error)
  }
})


app.listen(PORT, ()=>{
  console.log(`Serving up content on http://localhost:${PORT}`)
})
