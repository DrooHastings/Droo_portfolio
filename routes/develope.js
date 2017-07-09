const express = require('express');
const path = require ('path');
let router = express.Router();


//get Animal words from DB
router.get('/', function (req, res){
  console.log('hit develope route on server');
  res.send(200);

});

module.exports = router;
