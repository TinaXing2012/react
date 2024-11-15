import express from 'express';
// import * as productController from '../controllers/productController';
import {save, getAll, getById, updateById, deleteById} from '../controllers/productController';

const router = express.Router();

// router.post('/products', productController.save);
router.post('/products', save);
router.get('/products', getAll);
router.get('/products/:id', getById);
router.put('/products/:id', updateById);
router.delete('/products/:id', deleteById);





export default router;