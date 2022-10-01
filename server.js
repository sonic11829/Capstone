// Load express
const express = require('express');

const app = express();

const name = 'Jimmy Neutron'

app.get('/greeting', function (req, res) {
  res.send('Why hello there stranger!');
});

app.get('/greeting/:name', (req, res) => {
  res.send('Hey there ' + name + '!')
})

// app.get('/fruits/:i', (req, res) => {
//   const i = req.params.i
//   res.send(fruits[i])
// })
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});