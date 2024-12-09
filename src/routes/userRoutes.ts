import { Router } from 'express';
import UserController from '../controllers/userController'

const router = Router();

router.post('/', UserController.createUser.bind(UserController));
router.get('/', UserController.getAllUsers.bind(UserController));
router.put('/:id', UserController.updateUser.bind(UserController));
router.delete('/:id', UserController.deleteUser.bind(UserController));

export default router;