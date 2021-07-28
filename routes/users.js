const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const User = require('../models/User');

const router = express.Router();

router.post('/favourite/:movieId', checkIfLoggedIn, async (req, res) => {
	const { movieId } = req.params;
	const loggedInUser = req.session.currentUser;
	// eslint-disable-next-line no-underscore-dangle
	const user = await User.findById(loggedInUser._id);
	if (!user) {
		res.status(404).json('No user found by that id');
	}
	user.favouriteMovies.push(movieId);
	user.save();
	res.status(201).json(user);
});

router.post('/watchlater/:movieId', checkIfLoggedIn, async (req, res) => {
	const { movieId } = req.params;
	const loggedInUser = req.session.currentUser;
	// eslint-disable-next-line no-underscore-dangle
	const user = await User.findById(loggedInUser._id);
	if (!user) {
		res.status(404).json('No user found by that id');
	}
	user.watchLater.push(movieId);
	user.save();
	res.status(201).json(user);
});

// GET user's favourite movies
router.get('/favourite', checkIfLoggedIn, async (req, res) => {
	const loggedInUser = req.session.currentUser;
	// eslint-disable-next-line no-underscore-dangle
	const user = await User.findById(loggedInUser._id).populate('favouriteMovies');
	if (!user) {
		res.status(404).json('No user found by that id');
	}
	res.status(200).json(user.favouriteMovies);
});

// GET user's watch later movies
router.get('/watchlater', checkIfLoggedIn, async (req, res) => {
	const loggedInUser = req.session.currentUser;
	// eslint-disable-next-line no-underscore-dangle
	const user = await User.findById(loggedInUser._id).populate('watchLater');
	if (!user) {
		res.status(404).json('No user found by that id');
	}
	res.status(200).json(user.watchLater);
});

module.exports = router;
