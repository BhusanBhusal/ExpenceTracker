"use client"
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import { currencyFormatter } from "@/library/utility";
import ExpenceItem from "@/app/components/ExpenceItem";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import Modal from "@/app/components/Modal";
import { useState, useEffect } from 'react';
import { FcMoneyTransfer } from "react-icons/fc";
import TableExample from "@/app/components/IncomeTable";
import Income from "@/app/components/income/Income";
import { createIncomeService, fetchIncomeList } from "@/app/Service/income.service";


ChartJS.register(ArcElement, Tooltip, Legend);
const data = [
  {
    id: 1,
    title: "Entertainment",
    color: "#115f9a",
    amount: 450,
  },
  {
    id: 2,
    title: "Grocery",
    color: "#22a7f0",
    amount: 550,
  },
  {
    id: 3,
    title: "Travel",
    color: "#76c68f",
    amount: 600,
  },
  {
    id: 4,
    title: "Shopping",
    color: "#54bebe",
    amount: 200,
  },
  {
    id: 5,
    title: "Furniture",
    color: "#d0f400",
    amount: 500,
  },
]
export default function Home() {
  
  const [openExpenceModal, setOpenExpenceModal] = useState(false);
  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [incomeList, setIncomeList] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const createIncome = async (data) => {
    await createIncomeService(data);
    const res = await fetchIncomeList();
    setIncomeList(res);
  }
  useEffect(() => {
    const getIncomeData = (async () => {
      const res = await fetchIncomeList();
      setIncomeList(res);
      console.log(incomeList)
    });
    getIncomeData();
  }, [openIncomeModal])
  return (
    <>
      

      <main className="container px-2 py-2 mx-auto">
        {/* Expence Modal */}
        <Modal openModal={openExpenceModal} setOpenModal={setOpenExpenceModal}>
          <h3>welcome to modal</h3>
        </Modal>

        {/* income modal */}
        <Modal openModal={openIncomeModal} setOpenModal={setOpenIncomeModal}>
          <Income setOpenDelete={setOpenDelete} openDelete={openDelete} setIncomeList={setIncomeList} createIncome={createIncome} incomeList={incomeList} />
        </Modal>
        <section >
          <small className="text-gray-500 text-md">My Balance:</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(1000)}</h2>
        </section>
        <section className="flex items-center mt-2">
          <button onClick={() => { setOpenExpenceModal(true) }} className="btn btn-primary flex btn-small "><IoIosAdd className="text-xl" /> expencess</button>
          <button onClick={() => { setOpenIncomeModal(true) }} className="btn btn-green btn-small flex"><IoIosAdd className="text-xl" />Income</button>
        </section>

        {/* expence item list */}
        <section className="py-4">
          <h3 className="text-2xl">My Expences</h3>
          <div className="flex flex-col gap-2 mt-2">
            {data.map(exp => {
              return (<ExpenceItem
                key={exp.id}
                title={exp.title}
                color={exp.color}
                amount={exp.amount} />
              )
            })}

          </div>

        </section>

        {/* chart section start */}
        <section className="py-6">
          <h3 className="text-2xl">Stats</h3>
          <div className="w-1/2 mx-auto">
            <Doughnut data={{
              labels: data.map(ExpenceItem => ExpenceItem.title),
              datasets: [
                {
                  label: "Expences",
                  data: data.map(ExpenceItem => ExpenceItem.amount),
                  backgroundColor: data.map(ExpenceItem => ExpenceItem.color),
                  borderColor: ['#18181b'],
                  borderWidth: 5,

                }
              ]
            }} />
          </div>
        </section>
        {/* chart section end */}
      </main>
    </>
  );
}
