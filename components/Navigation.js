import { ImStatsBars } from "react-icons/im";
function Nav() {
    return (
        <>
            <header className="container max-w-2xl px-6 py-6 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                            {/* img  */}
                            <img className="object-cover w-full h-full" src="./user-image.jpg" alt="profile image" />
                        </div>
                        {/* user name */}
                        <small className="text-sm font-bold">Hello Bhusan</small>
                    </div>
                    {/* right side nevigation  */}
                    <nav className="flex gap-2">
                        <div><ImStatsBars className="text-3xl" /></div>
                        <div><button className="btn btn-danger">Logout</button></div>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Nav;