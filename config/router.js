const router = require('express').Router();

const auth = require('../controllers/auth');
const users = require('../controllers/users');

router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.register);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
