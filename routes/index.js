var express = require('express');
var Router = require('express-promise-router');
var db = require('../lib/database');
var router = Router();

/* GET home page. */


router.get('/', async function(req, res, next) {
  res.render('index');
});

router.post('/waitlist', async function(req, res){
  let data = req.body;
  await db('waitlist').insert({
    email: data.email,
  });
  console.log('Hello World');
  res.redirect('/');

  //line to submit email to DB
});

//make sure email looks like a valid email --> sanity check of some sort
//doesn't already exist in DB
//then maybe insert into DB



module.exports = router;
