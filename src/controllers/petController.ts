import { Request, Response } from 'express';
import { prisma } from '../config/database';
export class PetController {

    static async createPet(request: Request, response: Response) {
        try {
            const { name, breed, age, clientId } = request.body; // Dados do pet

            const newPet = await prisma.pet.create({
                data: { name, breed, age, clientId },
            });

            response.status(200).json({ message: "Pet cadastrado com sucesso", newPet });
        } catch (error) {
            response.status(500).json({ message: "Erro ao criar pet", error });
        }
    }


    static async getAllPets(request: Request, response: Response) {
        try {
            const pets = await prisma.pet.findMany({
                include: {
                    client: true,  // Incluir informações do cliente associado
                },
            });

            response.status(200).json(pets);
        } catch (error) {
            response.status(500).json({ message: "Erro ao buscar pets", error });
        }
    }


    static async updatePet(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, breed, age, clientId } = request.body;

            const updatedPet = await prisma.pet.update({
                where: { id: parseInt(id) },
                data: { name, breed, age, clientId },
            });

            response.status(200).json({ message: "Pet atualizado com sucesso", updatedPet });
        } catch (error) {
            response.status(500).json({ message: "Erro ao atualizar pet", error });
        }
    }


    static async deletePet(request: Request, response: Response) {
        try {
            const { id } = request.params;

            await prisma.pet.delete({
                where: { id: parseInt(id) },
            });

            response.status(200).json({ message: "Pet deletado com sucesso" });
        } catch (error) {
            response.status(500).json({ message: "Erro ao deletar pet", error });
        }
    }
}

