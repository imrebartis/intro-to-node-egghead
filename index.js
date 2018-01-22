var globalFoo

exports.setFoo = function(val) {
    globalFoo = val
}

exports.returnFoo = function() {
    return globalFoo
}

// node REPL:
// var modFoo = require('./index.js')
// modFoo.setFoo(42)
// modFoo.returnFoo()
// => 42

// global
// => we can see our mod Foo module that we imported is available, 
// but globalFoo is not, because GlobalFoo
//  was global to this code,
// not global to the application where we were using it.