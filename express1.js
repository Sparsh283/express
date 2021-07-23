const express = require('express');
const app = express();

console.log(__dirname);
app.use('/access', express.static(__dirname + '/text'));
app.get('/sparsh', function(request, response){
    response.send("Finally server made")//

});

app.listen(8080, function(){
    console.log('Basic server in action')
});