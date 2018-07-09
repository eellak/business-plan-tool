var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/docs"));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'docs/index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
})