const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		hashedPassword: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		favouriteMovies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
		watchLater: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
