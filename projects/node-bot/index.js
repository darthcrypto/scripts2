const express = require('express')
const app = express();
const git = require('simple-git')


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


/*
var repo = req.body.name.repo
var branch = req.body.name.repo
*/

git().clone('https://github.com/darthcrypto/scripts2.git').checkoutBranch('

