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

//Tip Calculator
//Your app should have a route of '/tip'and it should expect 2 params. 
//One should be total and one should be tipPercentage.
//When hitting the route, the page should display how much your tip will -
//- be based on the total amount of the bill and the tip percentage. 
//(ex. hitting '/tip/100/20'should display 20 on the page).

const tip = [{
  cost: parseInt()
}]

app.get('/tip', (req, res) => {
  let cost = req.query.cost;
  let percentage = req.query.percentage;
  let tip = cost * (percentage/100)
  let resString = `cost is ${cost}, percentage is ${percentage}, tip is ${tip}`
  res.send(resString)
})







// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});