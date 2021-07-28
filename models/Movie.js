const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
	title: { type: String, required: true },
	year: { type: Number },
	director: { type: String, required: true },
	genre: [{ type: String, required: true }],
	score: { type: Number, required: true },
	duration: { type: String, required: true },
	imgUrl: { type: String },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
