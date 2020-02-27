require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require('cors');

// const jwt = require('jsonwebtoken');

// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');
const issureRouter = require('../issues/issues-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);
server.use('/api/issues', issureRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!"});
});

// server.get('/token', (req, res) => {
//     const payload = {
//         subject: 'thatuser',
//         userid: 'jjaleman',
//     };
//     const secret = 'I think this is a secret';
//     const options = {
//         expiresIn: '1h'
//     };

//     const token = jwt.sign(payload, secret, options);

//     res.json(token);
// })

module.exports = server;