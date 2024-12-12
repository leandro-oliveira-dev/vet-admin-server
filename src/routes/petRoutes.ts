import { Router } from 'express';
import PetController from '../controllers/petController';

const router = Router();

router.post('/create', PetController.createPet.bind(PetController));
router.get('/getall', PetController.getAllPets.bind(PetController));
router.put('/update/:id', PetController.updatePet.bind(PetController));
router.delete('/delete/:id', PetController.deletePet.bind(PetController));

export default router;
