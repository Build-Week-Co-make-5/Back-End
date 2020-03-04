const db = require("../data/db.config.js");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db("issues");
}

function findById(id) {
  return db('issues').where({id});
}

function add(issue) {
  return db('issues').insert(issue);
}
