var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port = process.env.PORT || 2005;
var path ="C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe"


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');

app.post('/dl', function(req, res) {
    console.log(req.body.url);
    if(typeof req.body.instant !== "undefined" && req.body.instant){
        var criteria = ['/n','/d',req.body.url]
    }else{
        var criteria = ['/n', '/a','/d',req.body.url]
    }
    const execFile = require('child_process').execFile;
    const child = execFile(path, criteria, (error, stdout, stderr) => {
        if (error) {
            console.error('stderr', stderr);
            throw error;
        }
        console.log('stdout', stdout);
    });
    res.render('dl');
});
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/start', function(req, res) {

    const execFile = require('child_process').execFile;
    const child = execFile(path, ['/s'], (error, stdout, stderr) => {
        if (error) {
            console.error('stderr', stderr);
            throw error;
        }
        console.log('stdout', stdout);
    });
    res.render('start');
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);