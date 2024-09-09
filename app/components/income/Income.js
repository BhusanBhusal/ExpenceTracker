import { IoIosAdd } from "react-icons/io";
import TableExample from "../IncomeTable";
import { FcMoneyTransfer } from "react-icons/fc";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { deleteIncomeService, fetchIncomeList } from "@/app/Service/income.service";

const incomeValidationSchema = yup.object({
    id: yup.number(),
    incomeName: yup.string().required("Description field is required."),
    amount: yup.string().required("Please enter the amount.").min(1),
})

export default function Income({ createIncome, incomeList, setIncomeList, setOpenDelete, openDelete }) {
    const { register,reset, handleSubmit, formState: { errors },
    } = useForm({ resolver: yupResolver(incomeValidationSchema) });
    console.log({ errors });
    const incomeSubmit = async (data) => {
        console.log(data);
        await createIncome({ ...data, amount: parseInt(data.amount) });
        reset();
    }
    const deleteIncome = async(deleteId)=>{
        await deleteIncomeService(deleteId);
        const res = await fetchIncomeList();
        setIncomeList(res);
        setOpenDelete(false);
    }
    return (
        <>
            <section>
                <form className="w-full max-w-screen-lg min-w-2" onSubmit={handleSubmit(incomeSubmit)}>
                    <div className="min-w-0 flex-1">
                        <h2 className="items-center gap-1 text-xl mb-3 font-bold leading-7 text-black-500 flex border-b p-2"><FcMoneyTransfer className="text-xl" /> Manage Income</h2>
                    </div>
                    <div className="flex  w-full mb-3">
                        <div className="flex items-center">
                            <div className="w-36">
                                <label className="items-center w-fit text-gray-500 font-bold text-right mb-1 md:mb-0 pr-4" htmlFor="amount">
                                    Income Amount
                                </label>

                            </div>
                            <div className="w-36 ">
                                <input {...register('amount')} id="amount" type="number" className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-34 ml-2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="incomeName">
                                    Description
                                </label>
                            </div>
                            <div className="md:w-52">
                                <input {...register('incomeName')} id="incomeName" type="text" className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                            </div>
                        </div>
                        <div className=" ml-2">
                            <button type='submit' className="btn-small w-28 text-sm flex flex-row shadow bg-blue-500 btn focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                <IoIosAdd className="text-xl" /> Add Entry
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-32 mt-0 ml-32">
                        <div className="flex flex-row">
                            <span className="text-red-500 text-sm flex-row">{errors.amount?.message}</span>
                        </div>
                        <div>
                            <span className="text-red-500 text-sm">{errors.incomeName?.message}</span>
                        </div>
                    </div>
                </form>
            </section>
            {/* income history */}
            <section className="">
                
                <TableExample  setOpenDelete={setOpenDelete} openDelete={openDelete} deleteIncome={deleteIncome} incomeList={incomeList} />
            </section>
        </>

    )
}