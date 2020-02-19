const router = require('express').Router();
const user = require('../controllers/users.controller');
const login = require('../controllers/login.controller');

router.post('/', user.create);

router.get('/', user.findAll);

router.get('/:userId', user.findById);

router.post('/', user.update);

router.delete('/:userId', user.delete);

router.post('/login', login.connect);

module.exports = router;
