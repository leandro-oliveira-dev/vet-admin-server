import { Request, Response } from 'express'
import { prisma } from '../config/database';
export class UserController {
    static async createUser(request: Request, response: Response) {
        try {
            const { name, email, phoneNumber, address } = request.body;

            const newUser = await prisma.user.create({
                data: {
                    auth: {
                        create: {
                            email,
                            password: '123456'
                        }
                    },
                    name,
                    phoneNumber,
                    address,
                },
            });

            response.status(200).json({ message: "Usuário criado com sucesso", newUser });
        } catch (error) {
            response.status(500).json({ message: "Erro ao criar usuário", error });
        }
    }

    static async getAllUsers(request: Request, response: Response) {
        try {
            const users = await prisma.user.findMany(
                {
                    include: { auth: true },

                }
            );

            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({ message: "Erro ao buscar usuários", error });
        }
    }

    static async updateUser(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, email, phoneNumber, address } = request.body;

            const updatedUser = await prisma.user.update({
                where: { id: parseInt(id) },
                data: {
                    name,
                    auth: {
                        update: { email }
                    }, phoneNumber, address
                },
            })

            response.status(200).json({ message: "Usuário atualizado com sucesso", updatedUser })

        } catch (error) {
            response.status(500).json({ message: "Erro ao atualizar o usuário", error })
        }
    }

    static async deleteUser(request: Request, response: Response) {
        try {
            const { id } = request.params; // Pegar o ID da URL

            await prisma.user.delete({
                where: { id: parseInt(id) },
            });

            response.status(200).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            response.status(500).json({ message: "Erro ao deletar usuário", error });
        }
    }
}
