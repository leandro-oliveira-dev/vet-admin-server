import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';

const router = Router();

router.post('/', ClientController.createClient);
router.get('/', ClientController.getAllClients);
router.put('/:id', ClientController.updateCliente);
router.delete('/delete/:id', ClientController.deleteClient);

export default router;
