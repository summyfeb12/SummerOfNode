var app = require('express')();
var http = require('http').Server(app);
var xml = require('xml');
var sample=[ { toys: [ { toy: 'Transformers' } , { toy: 'GI Joe' }, { toy: 'He-man' } ] } ];
app.get('/', function(req, res){
  res.set('Content-Type', 'text/xml');
  //console.log(sample);
  console.log(xml(sample));
  res.send(xml(sample));

});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
