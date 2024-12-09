import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class ClientController {
    async createClient(request: Request, response: Response) {
        try {
            const { name, phoneNumber, address } = request.body;


            const newClient = await prisma.client.create({
                data: {
                    name,
                    phoneNumber,
                    address
                }
            });

            response.status(200).json({ message: "Cliente criado com sucesso!", newClient });
        } catch (error) {
            response.status(500).json({ message: "Erro ao criar cliente", error });
        }
    }

    async getAllClients(request: Request, response: Response) {
        try {

            const clients = await prisma.client.findMany({
                include: {
                    pets: true
                }
            })
            response.status(200).json(clients)
        } catch (error) {
            response.status(500).json({ message: "Erro ao buscar clientes", error })
        }
    }

    async updateCliente(request: Request, response: Response) {
        try {

            const { id } = request.params;
            const { name, phoneNumber, address } = request.body;

            const updateClient = await prisma.client.update({
                where: { id: parseInt(id) },
                data: { name, phoneNumber, address },
            })

            response.status(200).json({ message: "Cliente atualizado com sucesso!", updateClient })

        } catch (error) {
            response.status(500).json({ message: "Erro ao atualizar o cliente", error })
        }
    }

    async deleteClient(request: Request, response: Response) {
        try {
            const { id } = request.params;

            await prisma.client.delete({
                where: { id: parseInt(id) },
            });

            response.status(200).json({ message: "Cliente deletado com sucesso" });
        } catch (error) {
            response.status(500).json({ message: "Erro ao deletar cliente", error });
        }
    }
}

export default new ClientController();