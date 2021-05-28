const router = require('express').Router();
const { media } = require('../../../controllers');
const verifyToken = require('../../../middlewares/verifyToken');

router.post('/', media.create);
router.get('/', media.getAll);
router.get('/:id', media.getById);
router.put('/:id', verifyToken, media.update);
router.delete('/:id', verifyToken, media.delete);

module.exports = router;