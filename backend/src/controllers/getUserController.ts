import { Request, Response } from "express";
import { GetUserByCreateDate } from "../getUser";

export class GetUserByCreateDateController {
    async handle(req: Request, res: Response) {

        const getUserByCreateDate = new GetUserByCreateDate();

        const result = await getUserByCreateDate.execute();

        return res.status(200).json(result);
    }
}