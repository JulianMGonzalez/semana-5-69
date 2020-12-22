/* import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', usuarioController.add);
router.get('/list', usuarioController.list);
router.put('/update', usuarioController.update);
router.put('/activate', usuarioController.activate);
router.put('/deactivate', usuarioController.deactivate);
router.post('/login', usuarioController.login);

module.exports = router;