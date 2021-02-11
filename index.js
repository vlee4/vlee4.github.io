const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.send('We got home!');
} )

app.listen(PORT, ()=>{
  console.log(`Serving up content on http://localhost:${PORT}`)
})
