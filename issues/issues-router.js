const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const restricted = require("../auth/restricted-middleware.js");

const Issues = require("./issues-model.js");

// GET all issues
router.get("/", restricted, (req, res) => {
  Issues.find()
    .then(issue => {
      res.status(200).json({ message: "Located all issues", issue });
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting issues" });
    });
});

// Find an Issue by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Issues.findById(id).then(issues => {
    const issue = issues[0];

    if (issue) {
      res.json(issue);
    } else {
      res
        .status(404)
        .json({ message: "Issue could not be found with given id." });
    }
  });
});

// Create a new issue
router.post("/", restricted, (req, res) => {
  let issue = req.body;

  Issues.add(issue)
    .then(issue => {
      res.status(201).json({ created: issue });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new issues" });
    });
});

module.exports = router;
