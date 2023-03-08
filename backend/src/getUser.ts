import { User } from "@prisma/client";
import { prisma } from "../prisma/prismaClient";

export class GetUserByCreateDate {
    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany({
            orderBy: {
                name: "asc"
            },
            include: {
                sensor: {
                   select: {
                    name: true,
                    sensor_id: true
                   }
                }
            }
        })
        return users;
    }
}