import { Request, Response } from "express";
import { prisma } from "../config/database";


export class VeterinarianController {
    static async createVeterinarian(request: Request, response: Response) {
        try {
            const { name, email, specialization, phoneNumber } = request.body;

            const newVeterinarian = await prisma.veterinarian.create({
                data: {
                    name,
                    email,
                    specialization,
                    phoneNumber,
                }
            })

            response.status(201).json(newVeterinarian)

        } catch (error) {
            response.status(500).json({ error: 'Erro ao criar veterinário.' });
        }
    }

    static async getAllVeterinarians(request: Request, response: Response) {
        try {
            const veterinarians = await prisma.veterinarian.findMany();

            response.status(200).json(veterinarians);

        } catch (error) {
            console.error('Erro ao obter veterinários:', error);

            response.status(500).json({ error: 'Erro ao obter veterinários.' });
        }
    }

    static async getVeterinarianById(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;

            const veterinarian = await prisma.veterinarian.findUnique({
                where: { id: Number(id) },
            });

            if (!veterinarian) {
                response.status(404).json({ error: 'Veterinário não encontrado.' });
            }

            response.status(200).json(veterinarian);
        } catch (error) {
            console.error('Erro ao obter veterinário:', error);
            response.status(500).json({ error: 'Erro ao obter veterinário.' });
        }
    }

    // Atualizar um veterinário por ID
    static async updateVeterinarian(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;
            const { name, email, specialization, phoneNumber } = request.body;

            const updatedVeterinarian = await prisma.veterinarian.update({
                where: { id: Number(id) },
                data: {
                    name,
                    email,
                    specialization,
                    phoneNumber,
                },
            });

            response.status(200).json(updatedVeterinarian);
        } catch (error) {
            console.error('Erro ao atualizar veterinário:', error);
            response.status(500).json({ error: 'Erro ao atualizar veterinário.' });
        }
    }

    // Excluir um veterinário por ID
    static async deleteVeterinarian(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;

            await prisma.veterinarian.delete({
                where: { id: Number(id) },
            });

            response.status(204).send();
        } catch (error) {
            console.error('Erro ao excluir veterinário:', error);
            response.status(500).json({ error: 'Erro ao excluir veterinário.' });
        }
    }

}