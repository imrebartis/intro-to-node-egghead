// node REPL:
var sayHello = function() { console.log('Hello to you!') }
var sayGoodbye = function() { console.log('Goodbye then!') }

var EventEmitter = require('events').EventEmitter
emitter = new EventEmitter()
emitter.on('hello', sayHello)
emitter.on('goodbye', sayGoodbye)
emitter.emit('hello') // => Hello to you!
emitter.emit('goodbye') // => Goodbye then!
global.emitter._events // => { hello: [Function: sayHello], goodbye: [Function: sayGoodbye] }
global.emitter._events.hello.toString() // => 'function () { console.log(\'Hello to you!\') }'
emitter.on('hello', sayHello)
emitter.on('hello', sayHello)
global.emitter._events // =>
// { hello: 
//     [ [Function: sayHello],
//       [Function: sayHello],
//       [Function: sayHello] ],
//    goodbye: [Function: sayGoodbye] }
emitter.removeListener('hello', sayHello) // removes one of the sayHello functions
emitter.removeAllListeners('hello') // removes all the sayHello functions
emiter.setMaxListeners(0) // setting the max nr of listeners to unlimited
