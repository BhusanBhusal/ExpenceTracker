'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createIncomeModel = async(data)=>{
    return await prisma.income.create({data});
}

export const fetchIncomeListModel= async()=>{
    return await prisma.income.findMany();
}

export const deleteIncomeModel= async(incomeId) =>{
    const result = await prisma.income.delete({
        where:{
            id:incomeId,
        }
    });
    return result;
}