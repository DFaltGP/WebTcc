import { Request, Response } from "express";
import { PutSensorName } from "../putSensor";


export class PutSensorNameController {
    async handle(req: Request, res: Response) {
        const { id, sensor_id, name } = req.params;

        const putSensorName = new PutSensorName();

        const result = await putSensorName.execute({ id, sensor_id, name});

        return res.status(200).json(result);
    }
}