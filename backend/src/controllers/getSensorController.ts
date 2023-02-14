import { Request, Response } from "express";
import { GetSensor } from "../getSensor";

export class GetSensorController {
    async handle(req: Request, res: Response) {

        const getSensor = new GetSensor();

        const result = await getSensor.execute();

        return res.status(200).json(result);
    }
}