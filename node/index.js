const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://docker-lunch_mongo_1:27017/";

var fizzbuzz = function (fizz) {
  if(fizz % 3 == 0 && fizz % 5 == 0) {
    return "fizzbuzz"
  }
  else if(fizz % 5 == 0) {
    return "buzz"
  }
  else if(fizz % 3 == 0) {
    return "fizz"
  }
  return fizz
}

var pokemon = function (pokemonId) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("pokemon");

    dbo.collection("pokemon").findOne({name: "charizard"}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}
app.get('/fizz/:fizz', (req, res) => res.send(fizzbuzz(req.params.fizz)))
app.get('/pokemon/:pokemon', (req, res) => res.send(pokemon(req.params.pokemon)))
app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = fizzbuzz;
