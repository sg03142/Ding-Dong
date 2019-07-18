const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
    //__dirname : It will resolve to your project folder.
});
router.get('/views/seonghoon',function(req,res){res.sendFile(path.join(__dirname+'/views/seonghoon.html'));});

router.get('/chaelin', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chaelin/project/0717_project.html'))
    //__dirname : It will resolve to your project folder.
});
router.get('/c_10', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chaelin/c_10_dropdown.html'))
    //__dirname : It will resolve to your project folder.
});
router.get('/c_11', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chaelin/c_11_navbar.html'))
    //__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))