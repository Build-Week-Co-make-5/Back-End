const router = require("express").Router();

const Issues = require("./issues-model.js");

router.get("/", (req, res) => {
    Issues.find()
      .then(issue => {
        res.json({message:'testing', issue});
      })
      .catch(err => res.send(err));
  });

  module.exports = router;