// Load express
const express = require('express');

const app = express();

const greeting = [
    {
        name: 'jimmy'
    }
]

app.get('/greeting', function (req, res) {
  res.send('<h1>Why hello there stranger!</h1>');
});

app.get('/:name', (req, res) => {
    res.send(req.params.name + ' ' + ', ' + 'Howdy there!')
})

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});