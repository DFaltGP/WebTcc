import { prisma } from "../prisma/prismaClient";
import { AppError } from "./error/appError";
import { DeleteSensorInterface } from "./typeInterface/deleteSensorInterface";


export class DeleteSensor {
    async execute({ id, sensor_id }:DeleteSensorInterface): Promise<void> {
        const userExists = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if(!userExists) {
            throw new AppError("User does not exists")
        }          

        const sensorExists = await prisma.sensor.findUnique({
            where: {
                sensor_id
            }
        });

        if(!sensorExists) {
            throw new AppError("Sensor does not exists")
        }

        if(!userExists && !sensorExists) {
            throw new AppError("We do not find nothing in our databases")
        }

        await prisma.sensor.delete({
            where: {
                sensor_id
            }
        })
        
    }
}
