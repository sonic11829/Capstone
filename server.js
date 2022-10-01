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

app.get('/tip', (req, res) => {
  let cost = req.query.cost;
  let percentage = req.query.percentage;
  let tip = cost * (percentage/100)
  let resString = `cost is ${cost}, percentage is ${percentage}, tip is ${tip}`
  res.send(resString)
})


// Magic 8 Ball
// Create a route of '/magic'that should expect a phrase in the - 
// - URL that ask the Magic 8 ball a question.
// So if the user hits that route and asks a question of "Will I - 
// -be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') -
// -he should have return to him his question AND a random Magic 8 ball - 
// -response (see the array below) on the screen.
// We can't use spaces in the url, so we use %20 to express a space in the url.
// So if the user hits that route and asks a question of "Will I be a Millionaire" -
// -he should get his question asked and a random Magic 8 ball quote on the screen.
// Send the magic 8 ball response back between html <h1>tags
// Use this array of Magic 8 ball responses.....

const ballResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];



app.get('/magic/:question', (req, res) => {
  randomNumber = Math.floor(Math.random() * ballResponses.length);
  res.send(ballResponses[randomNumber]);
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});