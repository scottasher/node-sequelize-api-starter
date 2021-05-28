const bcrypt = require('bcrypt');

module.exports = {
    generatePassHash: async (pass) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt)
        return hash;
    },
    isValidPassword: async (pass, hash) => {
        return bcrypt.compareSync(pass, hash);
    }
}