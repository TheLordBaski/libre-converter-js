var fs = require('fs');
var exec = require('child_process').execSync;

exports.convert = function(doc, format, outDir) {
  try{
    fs.statSync(doc);
  }catch(err){
    if(err.code == 'ENOENT')
    	return false;
  }
  if(typeof outDir === 'undefined' || outDir === null){
  	outDirProperty = ''
  }else{
  	console.log("fck");
  	console.log(outDir);
  	outDirProperty = '--outdir ' + outDir 
  }
  exec('libreoffice --headless --convert-to ' + format + ' ' + doc + ' ' + outDirProperty + ' >/dev/null');
  return true;
}