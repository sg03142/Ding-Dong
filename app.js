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
router.get('/views/seonghoon', function (req, res) { res.sendFile(path.join(__dirname + '/views/seonghoon.html')); });

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
router.get('/c_12', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chaelin/c_12_navbar_external.html'))
    //__dirname : It will resolve to your project folder.
});
router.get('/c_13', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chaelin/c_13_form.html'))
    //__dirname : It will resolve to your project folder.
});
router.get('/detail', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email+', '+req.query.status)
    });

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))