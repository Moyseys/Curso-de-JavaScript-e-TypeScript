import { Router } from 'express';

import alunoController from '../controllers/alunoController';
import loginRequeried from '../middleware/loginRequeried';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequeried, alunoController.store);
router.put('/:id', loginRequeried, alunoController.update);
router.get('/:id', loginRequeried, alunoController.show);
router.delete('/:id', loginRequeried, alunoController.delete);

export default router;
