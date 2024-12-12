import { Router } from 'express';
import ClientController from '../controllers/clienteController';
import clienteController from '../controllers/clienteController';

const router = Router();

router.post('/', ClientController.createClient.bind(ClientController));
router.get('/getall', ClientController.getAllClients.bind(ClientController));
router.put('/update/:id', ClientController.updateCliente.bind(clienteController));
router.delete('/delete/:id', ClientController.deleteClient.bind(ClientController));

export default router;
