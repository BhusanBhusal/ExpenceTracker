"use client"
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import { currencyFormatter } from "@/library/utility";
import ExpenceItem from "@/components/ExpenceItem";

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 py-6 mx-auto">
      <section>
        <small className="text-gray-500 text-md">My Balance:</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(1000)}</h2>
      </section>
      <section className="flex items-center mt-2">
        <button className="btn btn-primary flex btn-small "><IoIosAdd className="text-xl" /> expencess</button>
        <button className="btn btn-green btn-small flex"><IoIosAdd className="text-xl" />Income</button>
      </section>

      {/* expence item list */}
      <section className="flex flex-col py-6 gap-2 mt-2">
        <h3 className="text-2xl">My Expences</h3>
        <ExpenceItem  title="arer" color="#000" amount={200} /> 
      </section>
    </main>
  );
}
