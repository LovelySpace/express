
// Expose modules in ./support for demo purposes
require.paths.unshift(__dirname + '/../../support');

/**
 * Module dependencies.
 */

var express = require('../../lib/express');

var app = express.createServer();

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

// Dummy record
var ninja = {
  name: 'leonardo',
  summary: { email: 'hunter.loftis+github@gmail.com', master: 'splinter', description: 'peaceful leader' },
  weapons: ['katana', 'fists', 'shell'],
  victims: ['shredder', 'brain', 'beebop', 'rocksteady']
};

app.get('/', function(req, res){
  res.render('ninjas', { ninja: ninja });
});

app.get('/li', function(req, res){
  res.partial('li', { object: 'Testing', as: 'value' });
});


app.listen(3000);
console.log('Express app started on port 3000');
