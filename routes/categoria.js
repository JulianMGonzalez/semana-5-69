/* import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyVendedor, categoriaController.add);
router.get('/list', auth.verifyVendedor, categoriaController.list);
router.put('/update', auth.verifyVendedor, categoriaController.update);
router.put('/activate', auth.verifyVendedor, categoriaController.activate);
router.put('/deactivate', auth.verifyVendedor, categoriaController.deactivate);

module.exports = router;