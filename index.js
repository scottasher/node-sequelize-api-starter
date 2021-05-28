const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes'));
app.use(require('./services/errorHandler'));

app.listen(keys.PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${keys.PORT}`)
});