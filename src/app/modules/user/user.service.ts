import {  PrismaClient, UserRole } from "@prisma/client"
import bcrypt from "bcrypt";

const prisma = new PrismaClient()
const createAdminDb = async (data: any) =>{
    console.log(data)
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const userData = {
        email: data.admin.email,
        password: hashedPassword,
        role:UserRole.ADMIN
    }
const result = await prisma.$transaction(async (transactionClient) =>{
   const createUser = await transactionClient.user.create({
        data: userData
    })
    const createAdminData = await transactionClient.admin.create({
        data:data.admin
    })
    return createAdminData
})
return result
}



export const userService = {
    createAdminDb
}