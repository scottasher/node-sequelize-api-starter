const router = require('express').Router();
const { users } = require('../../../controllers');
const verifyToken = require('../../../middlewares/verifyToken');

router.post('/', users.register);
router.post('/login', users.login);
router.get('/current', verifyToken, users.current);

module.exports = router;