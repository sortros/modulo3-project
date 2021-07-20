// const express = require('express');
// const checkIfUserIsLoggedIn = require('../middlewares/auth');
// const User = require('../models/user-model');

// const router = express.Router();
// 
// router.get('/', (req, res) => res.json);
// 
// router.get('/help-page', (req, res) => res.json);
// 
// router.get('/welcome', checkIfUserIsLoggedIn, (req, res) => {
//   res.json;
// });
// 
// router.get('/profile/edit', checkIfUserIsLoggedIn, (req, res) => {
//   res.json;
// });
// 
// router.post('/profile/edit', checkIfUserIsLoggedIn, (req, res, next) => {
//   const { _id } = req.session.currentUser;
//   User.findByIdAndUpdate(_id, { username, email}, { new: true })
//     .then(() => {
//       res.json;
//     })
//     .catch(err => {
//       next(err);
//     });
// });
// 
// module.exports = router;