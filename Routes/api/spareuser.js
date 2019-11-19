// const express = require("express");
// const users = express.Router();
// // const cors = require('cors')
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const User = require("../../Controllers/userController");

// process.env.SECRET_KEY = "secret";

// users.post("/login", (req, res) => {
//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//           // Passwords match
//           const payload = {
//             _id: user._id,
//             email: user.email
//           };
//           let token = jwt.sign(payload, process.env.SECRET_KEY, {
//             expiresIn: 1440
//           });
//           res.send(token);
//         } else {
//           // Passwords don't match
//           res.json({ error: "User does not exist" });
//         }
//       } else {
//         res.json({ error: "User does not exist" });
//       }
//     })
//     .catch(err => {
//       res.send("error: " + err);
//     });
// });

// users.get("/profile", (req, res) => {
//   var decoded = jwt.verify(
//     req.headers["authorization"],
//     process.env.SECRET_KEY
//   );

//   User.findOne({
//     _id: decoded._id
//   })
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.send("User does not exist");
//       }
//     })
//     .catch(err => {
//       res.send("error: " + err);
//     });
// });

// module.exports = users;
