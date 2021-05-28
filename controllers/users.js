const passport = require('passport');
const { User } = require('../db');
const { generatePassHash } = require('../utils');

module.exports = {
    register: async (req, res) => {
        const { user } = req.body;
        const newUserObj = {email: user.email};

        if(!user.password) {
            return res.send('Please provide a password')
        } else {
            newUserObj.hash = await generatePassHash(user.password);
        }
        const newUser = await User.findOrCreate({where: {email: newUserObj.email}, defaults:newUserObj});
        return res.json(newUser)
    },
    login: async (req, res) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if(user) {
                const userJWT = user.generateJWT();
                const userJSON = user.userToJsonWithToken(userJWT);
                return res.json({
                    user: userJSON,
                });
            }
        })(req, res)
    },
    current: async (req, res) => {
        const {payload, payload: {id}} = req;

        if(!id) {
            return res.json({
                status: 'error',
                desc: 'No user logged in'
            })
        } else {
            const user = await User.findOne({ where: { id: id }});
            return res.json({user: user.userToJsonCurrent()})
        }
    }
}