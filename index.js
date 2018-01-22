// works in the node REPL:
fs.readFile('zork.txt', 'utf8', function(err,data){
    console.log(data)
})

//OR 
fs.readFile('zork.txt', function(err,data){
    console.log(data.toString())
})

// => Lorem ipsum dolor amet health goth cliche craft beer, blog cloud bread air plant slow-carb mumblecore heirloom mixtape. Austin marfa readymade street art affogato. Cred wayfarers authentic, tote bag cloud bread cornhole meggings tumblr pitchfork. Street art portland church-key, snackwave semiotics seitan literally twee chambray farm-to-table heirloom plaid tousled. YOLO master cleanse bicycle rights fingerstache twee pok pok cronut. Health goth hella green juice enamel pin. Synth offal pug, woke ramps brunch keytar banjo shoreditch.

// specifying the length of buffer:
buf = new Buffer(5)
// => <Buffer 00 00 00 00 00>
buf.write('hello world')
//=> 5
buf.toString()
// => 'hello'

// using offset:
buf.write('hello', 2)
// => 3
buf.toString()
// => 'hehel'

//specifying offset (2) + length(1):
buf.write('xxxx', 2, 1)
// => 1
buf.toString()
// => 'hexel'

buf.write('yyyy', 2, 1, 'utf8')
// => 1
buf.toString()
// 'heyel'
