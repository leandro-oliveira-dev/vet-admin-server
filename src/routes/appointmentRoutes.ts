import { Router } from 'express';
import { AppointmentController } from '../controllers/AppointmentController';

const router = Router();

// Rota para listar todos os agendamentos
router.get('/appointments/getall', AppointmentController.getAllAppointments);

// Rota para criar um novo agendamento
router.post('/appointments/create', AppointmentController.createAppointment);

// Rota para buscar um agendamento por ID
router.get('/appointments/get/:id', AppointmentController.getAppointmentById);

// Rota para atualizar um agendamento
router.put('/appointments/update/:id', AppointmentController.updateAppointment);

// Rota para deletar um agendamento
router.delete('/appointments/delete/:id', AppointmentController.deleteAppointment);

export default router;