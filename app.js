const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const createError = require('http-errors');
require('dotenv').config();
const authRouter = require('./routes/auth');
const movieRouter = require('./routes/movies');

async function setupApp() {
	const app = express();
	app.use(
		cors({
			credentials: true,
			origin: [process.env.FRONTEND_DOMAIN],
		})
	);
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(
		session({
			store: MongoStore.create({
				mongoUrl: process.env.MONGODB_URI,
				ttl: 24 * 60 * 60,
			}),
			secret: process.env.SECRET_SESSION, // should be inside .env
			resave: true,
			saveUninitialized: true,
			cookie: {
				maxAge: 24 * 60 * 60 * 1000,
			},
		})
	);
	app.use('/', authRouter);
	app.use('/movies', movieRouter);
	// catch 404 and forward to error handler
	app.use((req, res, next) => {
		next(createError(404));
	});
	// error handler
	app.use((err, req, res) => {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render('error');
	});

	return app;
}
module.exports = setupApp;
