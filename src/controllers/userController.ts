import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class UserController {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email, phoneNumber, address } = request.body;

            const newUser = await prisma.user.create({
                data: {
                    email,
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

    async getAllUsers(request: Request, response: Response) {
        try {
            const users = await prisma.user.findMany();

            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({ message: "Erro ao buscar usuários", error });
        }
    }

    async updateUser(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, email, phoneNumber, address } = request.body;

            const updatedUser = await prisma.user.update({
                where: { id: parseInt(id) },
                data: { name, email, phoneNumber, address },
            })

            response.status(200).json({ message: "Usuário atualizado com sucesso", updatedUser })

        } catch (error) {
            response.status(500).json({ message: "Erro ao atualizar o usuário", error })
        }
    }

    async deleteUser(request: Request, response: Response) {
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

export default new UserController();