var PI = Math.PI

exports.area = function(r){
    return PI * r * r
}

exports.circumference = function(r){
    return 2* PI * r
}

// node REPL:
// var circle = require('./index')
// circle.area(4)
// => 50.26548245743669

// requiring the http module in the node REPL:
// var http = require('http')