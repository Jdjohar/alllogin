var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: "610954016431255",
    clientSecret: "d9dda63d6d79bd0171f8b9b73c59329d",
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({userid: profile.id}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;
