import { Request, Response } from "express";
import { prisma } from "../config/database";
class AppointmentController {
    static async getAllAppointments(request: Request, response: Response) {
        try {
            const appointments = await prisma.appointment.findMany({
                include: {
                    client: true,
                    pet: true,
                    veterinarian: true
                }
            })
            response.json(appointments).status(200)
        } catch (error) {
            console.log(error)
            response.status(500).json({ error: `Erro ao verificar os agendamentos` })
        }
    }

    static async createAppointment(request: Request, response: Response) {
        const { date, clientId, petId, veterinarianId } = request.body

        try {
            const appointmentDate = new Date(date);

            const hour = appointmentDate.getHours();

            if (hour < 9 || hour > 17 || hour === 12) {

                response.status(400).json({ error: 'Horário fora do expediente ou no horário de almoço do veterinário' })
            }

            const existingAppointment = await prisma.appointment.findFirst({
                where: {
                    veterinarianId,
                    date: appointmentDate,
                },
            })

            if (existingAppointment) {
                response.status(400).json({ error: 'O veterinário já possui um agendamento nesse horário' });
            }

            const newAppointment = await prisma.appointment.create({
                data: {
                    date: new Date(date),
                    clientId,
                    petId,
                    veterinarianId,
                },
            });
            response.json(newAppointment).status(201)
        } catch (error) {

            console.log(error)
            response.status(500).json({ error: `Erro ao criar o agendamento` })
        }
    }


    static async getAppointmentById(request: Request, response: Response) {

        const { id } = request.params
        try {

            const appointment = await prisma.appointment.findUnique({
                where: { id: Number(id) },
                include: {
                    client: true,
                    pet: true,
                    veterinarian: true
                }
            })

            if (!appointment) {
                return response.status(404).json({ error: `Agendamento não encontrado` })
            }

            response.json(appointment).status(200)

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: `Erro ao buscar o agendamento específico` })
        }

    }

    static async updateAppointment(request: Request, response: Response) {
        const { id } = request.params
        const { date, clientId, petId, veterinarianId } = request.body

        try {

            const updatedAppointment = await prisma.appointment.update({
                where: { id: Number(id) },
                data: {
                    date: date ? new Date(date) : undefined,
                    clientId,
                    petId,
                    veterinarianId
                }
            })

            response.json(updatedAppointment).status(200)

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: `Erro ao atualizar o agendamento` })
        }
    }

    static async deleteAppointment(request: Request, response: Response) {
        const { id } = request.params
        try {

            await prisma.appointment.delete({ where: { id: Number(id) } })
            response.status(204).send

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: `Erro ao deletar o agendamento` })
        }
    }
}

export { AppointmentController };