const { Media } = require('../db');

module.exports = {
    create: async (req, res) => {
        const { files } = req;
        const { id, displayName } = req.payload;
        const author = { id: id, name: displayName };
    },
    getAll: async (req, res) => {

    },
    getById: async (req, res) => {

    },
    update: async (req, res) => {

    },
    delete: async (req, res) => {

    },
}