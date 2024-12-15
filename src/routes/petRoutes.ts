import { Router } from 'express';
import { PetController } from '../controllers/PetController';

const router = Router();

router.post('/create', PetController.createPet);
router.get('/getall', PetController.getAllPets);
router.put('/update/:id', PetController.updatePet);
router.delete('/delete/:id', PetController.deletePet);

export default router;
