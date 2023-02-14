import { prisma } from "../prisma/prismaClient";
import { AppError } from "./error/appError";
import { CreateSensorInterface } from "./typeInterface/createSensorInterface";

export class CreateSensor {
    async execute({ ownerId, name, content, id }:CreateSensorInterface): Promise<void> {
      //  VERIFICAR SE O USUÁRIO EXISTE
        const userExists = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if(!userExists) {
            throw new AppError("User does not exists")
        }

        await prisma.sensor.create({
            data: {
                name,
                content,
                ownerId
            }
        })   
    };
}
