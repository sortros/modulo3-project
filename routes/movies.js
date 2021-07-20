// const express = require('express');
// const checkIfUserIsLoggedIn = require('../middlewares/auth');
// const Recipe = require('../models/recipe-model');
// const User = require('../models/user-model');
// 
// const router = express.Router();
// 
// router.get('/search', checkIfUserIsLoggedIn, (req, res) => {
//   res.json;
// });
// 
// router.post('/search', checkIfUserIsLoggedIn, (req, res, next) => {
//   {
//     res.json;
//   }
//   
//     .then(recipesFounded => {
//       res.json;
//     })
//     .catch(err => {
//       next(err);
//       res.json;
//     });
// });
// 
// router.get('/recipes/:id/details', checkIfUserIsLoggedIn, (req, res, next) => {
//   Movie.findById(req.params.id)
//     .then(movie => {
//       res.json;
//     })
//     .catch(err => {
//       next(err);
//     });
// });
// 
// router.post('/recipes/:id/details', checkIfUserIsLoggedIn, (req, res, next) => {
//   const user = req.session.currentUser;
//   const { id } = req.params;
//   // eslint-disable-next-line no-underscore-dangle
//   User.findById(user._id)
//     // eslint-disable-next-line consistent-return
//     // eslint-disable-next-line no-shadow
//     .then(user => {
//       if (user.favouriteRecipes.includes(id) === true) {
//         res.json;
//         return;
//       }
//       user.favouriteRecipes.push(id);
//       user.save();
//       res.json;
//     })
//     .catch(err => {
//       next(err);
//     });
// });
// 
// router.get('/favourites', checkIfUserIsLoggedIn, (req, res, next) => {
//   const user = req.session.currentUser;
//   User.findById(user)
//     .populate('favouriteRecipes')
// 
//     .then(userFounded => {
//       res.json;
//     })
//     .catch(err => {
//       next(err);
//     });
// });
// 
// router.post('/favourites/:id', checkIfUserIsLoggedIn, (req, res, next) => {
//   const user = req.session.currentUser;
//   const { id } = req.params;
//   // eslint-disable-next-line no-underscore-dangle
//   User.findById(user._id)
//     // eslint-disable-next-line no-shadow
//     .then(user => {
//       user.favouriteRecipes.splice(id, 1);
//       return user.save();
//     })
//     .then(() => res.redirect('/favourites'))
//     .catch(err => {
//       next(err);
//     });
// });

module.exports = router;
