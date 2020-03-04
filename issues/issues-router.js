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

// Deleting an Issues
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Issues.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find issue with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete issue!" });
    });
});

// Updating an Issue
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Issues.update(changes, id)
    .then(issue => {
      if (issue) {
        res.json({ update: issue });
      } else {
        res.status(404).json({ message: "Could not find issue with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update issue!" });
    });
});

module.exports = router;
