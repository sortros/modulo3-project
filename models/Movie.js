const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		genre: { type: String, required: true },
    duration: { type: Number, required: true, unique: true },
	}
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
