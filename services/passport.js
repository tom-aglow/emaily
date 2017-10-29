const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    //	handle the callback from Google OAUTH
    async (accessToken, refreshToken, profile, done) => {
      const user =
        (await User.findOne({ googleID: profile.id })) ||
        (await new User({ googleID: profile.id }).save());

      done(null, user);

      // if (existingUser) {
      //   done(null, existingUser);
      // } else {
      //   const user = await new User({ googleID: profile.id }).save();
      // }
    }
  )
);
