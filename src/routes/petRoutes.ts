import { Router } from 'express';
import PetController from '../controllers/petController';

const router = Router();

router.post('/', PetController.createPet.bind(PetController));
router.get('/', PetController.getAllPets.bind(PetController));
router.put('/:id', PetController.updatePet.bind(PetController));
router.delete('/:id', PetController.deletePet.bind(PetController));

export default router;
