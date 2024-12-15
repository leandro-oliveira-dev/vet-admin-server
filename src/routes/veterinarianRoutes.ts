import { Router } from 'express';
import { VeterinarianController } from '../controllers/VeterinarianController';

const router = Router();

router.post('/create', VeterinarianController.createVeterinarian);
router.get('/getall', VeterinarianController.getAllVeterinarians);
router.get('/getone/:id', VeterinarianController.getVeterinarianById);
router.put('/update/:id', VeterinarianController.updateVeterinarian);
router.delete('/delete/:id', VeterinarianController.deleteVeterinarian);

export default router;