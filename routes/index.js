var express = require('express');
var router = express.Router();
var fs = require('fs');

let db_path = `public/db.json`;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/updatedb", async function(req, res) {

    console.log(req.body.db);
    let result = fs.writeFileSync(db_path, req.body.db);

    res.send(result);
})

router.get("/db", async function(req, res) {
    let db = fs.readFileSync(db_path, 'utf-8');

    res.send(db)
})

module.exports = router;