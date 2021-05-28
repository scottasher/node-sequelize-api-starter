const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db');
const { isValidPassword } = require('../utils');

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
}, async (email, password, done) => {
    const user = await User.findOne({where: {email: email}});
    const passValid = await isValidPassword(password, user.hash);
    console.log(user)
    if(!user) {
        return done(null, false, {email: false})
    }
    if(!passValid) {
        return done(null, false, {email: true, password: false})
    }
    return done(null, user, {email: true, password: true})
}));