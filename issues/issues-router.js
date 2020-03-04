const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const restricted = require('../auth/restricted-middleware.js')


const Issues = require("./issues-model.js");

// GET all issues
router.get("/", restricted, (req, res) => {
    Issues.find()
      .then(issue => {
        res.status(200).json({message:'Located all issues', issue});
      })
      .catch( err => {
          res.status(500).json({message: 'Error getting issues'})
      });
  });

// Create a new issue
router.post('/', restricted, (req, res) => {
    let issue = req.body;
    issue.user_id = req.users.userid;

    Issues.add(issue)
    .then(res =>{
        res.status(201).json(res)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



  module.exports = router;