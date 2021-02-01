var htmlConvert = require('html-convert');
var fs = require('fs');

var convert = htmlConvert();

convert('http://www.google.com').pipe(fs.createWriteStream('google.png'));

// or also convert html file to png image

fs.createReadStream('simple.html')
.pipe(convert())
.pipe(fs.createWriteStream('simple.png'));

