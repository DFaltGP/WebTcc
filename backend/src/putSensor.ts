import { prisma } from "../prisma/prismaClient";
import { AppError } from "./error/appError";
import { PutUserInterface } from "./typeInterface/putSensorInterface";

export class PutSensorName {
    async execute({ id, sensor_id, name }:PutUserInterface): Promise<void> {
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

        await prisma.sensor.update({
         where: {
            sensor_id
         },
         data: {
            name
         }
        })  
// FAÇA VALIDAÇÃO PARA CAMPOS VAZIOS E AMBOS SENSOR E USER INEXISTENTES
    }
}


// app.put('/publish/:id', async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.update({
//     where: { id },
//     data: { published: true },
//   })
//   res.json(post)
// })