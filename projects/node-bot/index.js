const express = require('express')
const app = express();
const git = require('simple-git')
const pomParser = require("pom-parser");
const semver = require('semver')

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

/*
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
*/
  /*
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
*/

var branch = "feature/SA-56-major";
var version = "1.0.0-SNAPSHOT";
var branchsplit = branch.split('-');
var versionsplit = version.split('-');

console.log(branch);
console.log(version);
console.log(branchsplit);
console.log(versionsplit[0]);


if (branchsplit[2] == "patch") {
  console.log("Hey this is a patch upgrade to the pom");
  const semincrease = semver.inc(versionsplit[0], 'patch');
  console.log("The new verison is " + versionsplit[0]);
  console.log("This is a patch semantic increase: " + semincrease);
}
else if (branchsplit[2] == "minor") {
  console.log("Hey this a minor upgrade to the pom");
  const semincrease = semver.inc(versionsplit[0], 'minor');
  console.log("This is a minor semantic increase: " + semincrease);
}
else if (branchsplit[2] == "major") {
  console.log("Hey this a major upgrade");
  const semincrease = semver.inc(versionsplit[0], 'major');
  console.log("This is a major semantic increase: " + semincrease);

}
else {
  console.log("The branch is not formatted correctly. EXIT.")
}   




/*
if anywhere in branch it says patch:
     get rid of SNAPSHOT in version
     bump the patch number in version with semantic version library
     console.log(version)
*/
