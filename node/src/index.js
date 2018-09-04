const express = require('express')
const app = express()

function fizzbuzz(fizz) {
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

app.get('/:fizz', (req, res) => res.send(fizzbuzz(req.params.fizz)))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
