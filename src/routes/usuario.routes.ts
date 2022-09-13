import { Router } from 'express';
import { addUsuario } from '../controllers/usuario.controller';

const router = Router();

router.post('/', addUsuario);

export default router;