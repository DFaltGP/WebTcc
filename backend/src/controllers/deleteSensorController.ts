import { Request, Response } from "express";
import { DeleteSensor } from "../deleteSensor";


export class DeleteSensorController {
    async handle(req: Request, res: Response) {
        const { id, sensor_id } = req.params;

        const deleteSensor = new DeleteSensor();

        const result = await deleteSensor.execute({ id, sensor_id });

        return res.status(200).json(result);
    }
}