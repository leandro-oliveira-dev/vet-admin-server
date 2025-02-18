import { Router } from 'express';
import { PetController } from '../controllers/PetController';

const router = Router();

router.post('/', PetController.createPet);
router.get('/', PetController.getAllPets);
router.put('/:id', PetController.updatePet);
router.delete('/:id', PetController.deletePet);

export default router;
