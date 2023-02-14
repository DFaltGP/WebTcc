import { Sensor } from "@prisma/client";
import { prisma } from "../prisma/prismaClient";

export class GetSensor {
    async execute(): Promise<Sensor[]> {
        const sensors = await prisma.sensor.findMany({
          include: {
            owner: {
                select: {
                    name: true,
                    email: true
                }
            }
          }
        })
        return sensors;
    }
}