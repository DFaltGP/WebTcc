import { Request, Response } from "express";
import { CreateUser } from "../createUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        const createUser = new CreateUser();

        const result = await createUser.execute({ name, email });

        return res.status(201).json(result);
    }
}