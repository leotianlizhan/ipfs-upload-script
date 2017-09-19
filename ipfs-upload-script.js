var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});

ipfs.util.addFromFs('./', {recursive: true}, function(err, files) {
  if(err) console.log(err);
  else {
    console.log(files)
  }
});
