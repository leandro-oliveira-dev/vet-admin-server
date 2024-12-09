import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class UserController {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email } = request.body;

            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                },
            });

            response.status(200).json(newUser);
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
}

export default new UserController();