import { Request, Response } from 'express'
import { prisma } from '../config/database';

export class ClientController {
    static async createClient(request: Request, response: Response) {
        try {
            const { name, email, phoneNumber, address } = request.body;


            const newClient = await prisma.client.create({
                data: {
                    name,
                    auth: {
                        create: {
                            email,
                            password: '123456'
                        }
                    },
                    phoneNumber,
                    address
                }
            });

            response.status(200).json({ message: "Cliente criado com sucesso!", newClient });
        } catch (error) {
            response.status(500).json({ message: "Erro ao criar cliente", error });
        }
    }

    static async getAllClients(request: Request, response: Response) {
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

    static async updateCliente(request: Request, response: Response) {
        try {

            const { id } = request.params;
            const { name, email, phoneNumber, address } = request.body;

            const updateClient = await prisma.client.update({
                where: { id: parseInt(id) },
                data: {
                    name, auth: {
                        update: {
                            email,
                        }
                    }, phoneNumber, address
                },
            })

            response.status(200).json({ message: "Cliente atualizado com sucesso!", updateClient })

        } catch (error) {
            response.status(500).json({ message: "Erro ao atualizar o cliente", error })
        }
    }

    static async deleteClient(request: Request, response: Response) {
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