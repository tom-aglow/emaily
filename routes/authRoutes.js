const passport = require('passport');

module.exports = app => {
  //	route handler to kick user to google authentication
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //	route handler for Google OAUTH callback
  app.get('/auth/google/callback', passport.authenticate('google'));
};
