import { Router, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const router = Router();

async function createUser(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const { name, email } = request.body;

    const newUser = await prisma.user.create({
        data: {
            email,
            name,
        },
    });

    response.json(newUser);
}

router.post('/', createUser);

router.get('/', async (req, res) => {
    try {
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

export default router;
