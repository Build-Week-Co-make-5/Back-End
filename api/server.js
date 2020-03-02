require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const issueRouter = require('../issues/issues-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/issues', issueRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!"});
});

module.exports = server;