/* import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth'; */
const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');


const router = routerx();

router.post('/add', categoriaController.add);
router.get('/list', categoriaController.list);
router.put('/update', categoriaController.update);
router.put('/activate', categoriaController.activate);
router.put('/deactivate', categoriaController.deactivate);


module.exports = router;