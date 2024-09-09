import { createIncomeModel, fetchIncomeListModel, deleteIncomeModel } from "../models/income.model";


export const createIncomeService = async (data) => {
    try {
        return await createIncomeModel(data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchIncomeList = async () => {
    try {
        return await fetchIncomeListModel();
    } catch (error) {
        console.log(error)
    }
}
export const deleteIncomeService = async (incomeId) => {
    try {
        const res = await deleteIncomeModel(incomeId);
        return res;
    } catch (error) {
        return error;
    }
}