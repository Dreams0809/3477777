import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User.js';

passport.use(new LocalStrategy(
  {
    usernameField: 'userName', // or 'email' depending on your login field
  },
  function (username, password, done) {
    User.findOne({ userName: username }, function (err, user) {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect username.' });

      user.comparePassword(password, function (err, isMatch) {
        if (err) return done(err);
        if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

        return done(null, user);
      });
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

export default passport;