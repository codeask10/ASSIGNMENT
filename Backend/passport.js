const GoogleStrategy = require('passport-google-oidc');
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.REACT_APP_CLIENT_ID,
			clientSecret: process.env.REACT_APP_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});