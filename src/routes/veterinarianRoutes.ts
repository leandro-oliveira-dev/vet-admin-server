import { Router } from 'express';
import { VeterinarianController } from '../controllers/VeterinarianController';

const router = Router();

router.post('/', VeterinarianController.createVeterinarian);
router.get('/getall', VeterinarianController.getAllVeterinarians);
router.get('/getone/:id', VeterinarianController.getVeterinarianById);
router.put('/:id', VeterinarianController.updateVeterinarian);
router.delete('/:id', VeterinarianController.deleteVeterinarian);

export default router;