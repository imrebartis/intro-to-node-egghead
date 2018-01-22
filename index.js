var http = require('http')
var heapdump = require('heapdump')


function BigData(){
    var mem = Array(1000000).join("a")
}

var leak = []

var server = http.createServer(function(request, response){
    if(request.url === "/"){
        // leak.push(new BigData)
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end('Hello World')
    } 
})

server.listen(3000)