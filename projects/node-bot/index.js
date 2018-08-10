const express = require('express')
const app = express();
const git = require('simple-git')
const pomParser = require("pom-parser");

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


/////////// variables/////////////
var repo = req.body.name.repo
var branch = req.body.name.repo
//////////////////////////////////

/////////////working git wrapper//////////////////////
git().clone('https://github.com/darthcrypto/scripts2.git', '--branch', 'test')

//////////////////////////////////
//parse a pom////////////////////
const opts = {
  filePath: "./pom.xml", 
};

pomParser.parse(opts, function(err, pomResponse) {
  if (err) {
    console.log("ERROR: " + err);
    process.exit(1);
  }

// The original pom xml that was loaded is provided.
  console.log("XML: " + pomResponse.pomXml);
  // The parsed pom pbject.
  console.log("OBJECT: " + JSON.stringify(pomResponse.pomObject));
  var pomstuff = JSON.stringify(pomResponse.pomObject);
console.log(pomstuff);
  var jsoner = JSON.parse(pomstuff)
  console.log(jsoner);
  var pomversion = jsoner.project.version
  console.log("Your pom verison is " + pomversion)
});
///////////////////////////////////////////



