import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';

const router = Router();

router.post('/', ClientController.createClient);
router.get('/getall', ClientController.getAllClients);
router.put('/update/:id', ClientController.updateCliente);
router.delete('/delete/:id', ClientController.deleteClient);

export default router;
