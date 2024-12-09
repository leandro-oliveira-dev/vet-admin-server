import { Router } from 'express';
import UserController from '../controllers/userController'

const router = Router();

router.post('/', UserController.createUser.bind(UserController));
router.get('/', UserController.getAllUsers.bind(UserController));

export default router;