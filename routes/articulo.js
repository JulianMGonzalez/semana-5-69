/* import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyVendedor, articuloController.add);
router.get('/list', auth.verifyVendedor, articuloController.list);
router.put('/update', auth.verifyVendedor, articuloController.update);
router.put('/activate', auth.verifyVendedor, articuloController.activate);
router.put('/deactivate', auth.verifyVendedor, articuloController.deactivate);

module.exports = router;