import { User } from "@prisma/client";
import { prisma } from "../prisma/prismaClient";
import { AppError } from "./error/appError";
import { CreateUserInterface } from "./typeInterface/createUserInterface";

export class CreateUser {
    async execute({ name, email }:CreateUserInterface): Promise<User> {
        // VERIFICAR EXISTÊNCIA DE USUÁRIO POR EMAIL
       const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })
        // CONDIÇÃO DE ERRO: NEGAR USUÁRIO DUPLICADO
        if(userAlreadyExists) {
         throw new AppError("User already exists");
        }

        const user = await prisma.user.create({
            data: {
              name,
              email,
            }
        })

        return user;

    }
};