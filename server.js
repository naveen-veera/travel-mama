const express = require('express');  
const path = require('path');  
  
const ngApp = express();  
  
ngApp.use(express.static('./dist/travel-mama'));  
  
ngApp.get('/*', function (request, response) {  
    response.sendFile(path.join(__dirname, '/dist/travel-mama/index.html'));  
});  
  
ngApp.listen(process.env.PORT || 8080); 