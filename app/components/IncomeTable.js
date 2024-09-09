import { MdDeleteSweep } from "react-icons/md";
import DeleteConfirmation from "./DeleteModal/DeleteModal";
import { useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";

export default function IncomeTable({ incomeList, deleteIncome, setOpenDelete, openDelete }) {

  const [deleteId, setDeleteId] = useState(false);
  const deleteIncomeConfirm = async (id) => {
    setDeleteId(id);
    setOpenDelete(true);

  }
  return (
    <>

      {incomeList &&
        <div className="">
          <h2 className="gap-1 text-xl mb-3 font-bold leading-7 text-black-500 flex border-b p-2">
            <FcMoneyTransfer className="text-2xl" /> Income History
          </h2>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className=" flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr className="">
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Description
                        </th>

                        <th scope="col" className="py-3.5 text-right text-sm font-semibold text-gray-900">
                          Amount
                        </th>
                        <th scope="col" className="relative py-3.5 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {incomeList && incomeList.map((res) => (
                        <tr key={res.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-0">
                            {res.incomeName}
                          </td>

                          <td className="whitespace-nowrap text-right py-4 text-sm text-gray-500">{res.amount}</td>
                          <td className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-center  text-sm font-medium sm:pr-0">
                            <a href="#" onClick={() => { deleteIncomeConfirm(res.id) }} className="text-indigo-600 flex hover:text-indigo-900 ">
                              <MdDeleteSweep className="text-xl text-red-500" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <DeleteConfirmation deleteIncome={deleteIncome} deleteId={deleteId} openDelete={openDelete} setOpenDelete={setOpenDelete} />
    </>
  )
}