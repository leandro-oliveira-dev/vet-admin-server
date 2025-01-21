import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.post('/create', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;