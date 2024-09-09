"use client"
import { currencyFormatter } from "@/library/utility";


function ExpenceItem({ color, title, amount }) {
    return (
        <button>
            <div className="flex items-center justify-between px-2 py-2 bg-blue-300 rounded-2xl">
                <div className="flex items-center gap-2">
                    <div className="w-[20px] h-[20px] rounded-full " style={{ backgroundColor: color }}>
                    </div>
                    <h4 className="capitalize">{title}</h4>
                </div>
                <p>{currencyFormatter(amount)}</p>
            </div>
        </button>
    )
};
export default ExpenceItem;