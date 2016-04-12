# libre-converter-js

##Usage
```
var loc = require('./index.js')

var intputfile = 'file.xlsx';
var format = 'pdf'
var outputdir = '/home/name/projects/pdfs'; //Default is currentDirectory .

var isConverted = loc.convert(inputFile, format, outputDir);
// isConverted = true/false
```

