import { prisma } from "../prisma/prismaClient";
import { AppError } from "./error/appError";
import { DeleteUserInterface } from "./typeInterface/deleteUserInterface";


export class DeleteUser {
    async execute({ id }:DeleteUserInterface): Promise<void> {
        const userExists = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if(!userExists) {
            throw new AppError("User does not exists")
        };

        await prisma.user.delete({
            where: {
                id
            }
        });
        
    }
}
