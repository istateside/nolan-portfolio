const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render("index");
});

app.listen(3000, function()  {
  console.log("App listening on port 3000.");
});