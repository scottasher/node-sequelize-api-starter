const jwt = require('jsonwebtoken');
const { cookieKey } = require('../config/keys');

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization || req.query.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, cookieKey, (err, user) => {
            if (err) {
                return res.json({
                    user: {
                        error: 'No Token Provided',
                        active: false
                    }
                });
            }
            req.payload = user;
            next();
        });
    } else {
        return res.json({
            user: {
                active: false
            }
        });
    }
};

module.exports = auth