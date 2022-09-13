import { Router } from 'express';
import { getProductos } from '../controllers/producto.controller';

const router = Router();

router.get('/', getProductos);

export default router;