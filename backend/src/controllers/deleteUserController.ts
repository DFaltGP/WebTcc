import { Request, Response } from "express";
import { DeleteUser } from "../deleteUser";


export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteUser = new DeleteUser();

        const result = await deleteUser.execute({ id });

        return res.status(200).json(result);
    }
}