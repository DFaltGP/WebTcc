import { Request, Response } from "express";
import { CreateSensor } from "../createSensor";

export class CreateSensorController {
    async handle(req: Request, res: Response) {
        const { name, content, ownerId, id} = req.body;

        const createSensor = new CreateSensor();

        const result = await createSensor.execute({ name, content, ownerId, id});

        return res.status(201).json(result);
    }
}
