import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequeried from '../middleware/loginRequeried';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequeried, userController.update);
router.delete('/', loginRequeried, userController.delete);

export default router;

/*
index -> lista os usuarios -> GET
store/create -> cria -> POST
show -> mostra um usuario -> GET
delete -> apaga um user -> DELETE
update -> atualiza um -> PATCH ou PUT
*/
