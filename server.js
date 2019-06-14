var http = require('http');
var fs = require('fs');

const PORT=3000

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.send(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT, process.env.IP, function(){
   console.log("Placement server has started");
});
});

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("YelpCamp server has started");
// });