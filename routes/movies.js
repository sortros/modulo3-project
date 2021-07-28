const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const Movie = require('../models/Movie');
// const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
	const movies = await Movie.find({});
	if (!movies) {
		res.status(404).json('There are no movies in this database');
	}
	res.status(200).json(movies);
});

router.post('/', checkIfLoggedIn, async (req, res) => {
	const { title, year, director, genre, score, duration, imgUrl } = req.body;
	const movie = await Movie.create({ title, year, director, genre, score, duration, imgUrl });
	res.status(201).json(movie);
});

router.get('/:movieId', async (req, res) => {
	const { movieId } = req.params;
	const movie = await Movie.findById(movieId);
	if (!movie) {
		res.status(404).json('No movie found');
	}
	res.status(200).json(movie);
});

router.put('/edit/:movieId', checkIfLoggedIn, async (req, res) => {
	const { movieId } = req.params;
	const { title, year, director, genre, score, duration, imgUrl } = req.body;
	const movie = await Movie.findByIdAndUpdate(
		movieId,
		{ title, year, director, genre, score, duration, imgUrl },
		{ new: true }
	);
	if (!movie) {
		res.status(404).json('No movie found');
	}
	res.status(201).json(movie);
});

router.delete('/:movieId', checkIfLoggedIn, async (req, res) => {
	const { movieId } = req.params;
	const movie = await Movie.findByIdAndDelete(movieId);
	if (!movie) {
		res.status(404).json('No movie found');
	}
	res.status(204).json(movie);
});

module.exports = router;
