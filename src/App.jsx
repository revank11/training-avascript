import Layout from "./components/Layout.jsx";
import {SlCalender} from "react-icons/sl"
import {BsCalendarDate,BsInboxFill,BsFlagFill} from "react-icons/bs"
import {GrCompliance} from "react-icons/gr"

export default function App() {
    return (<Layout>
        <main>
            <div className="mx-auto flex flex-wrap">
                <div className="md:bg-gray-800 w-full md:w-fit md:h-screen">
                    <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 w-fit p-4">
                        <div className="card bg-gray-700 p-4 w-52 max-w-xs h-fit cursor-pointer">
                            <div className="flex justify-between p-2">
                                <div className="self-center">
                                    <div className="bg-primary text-primary-content p-2 rounded-full w-fit h-fit">
                                        <BsCalendarDate size={24}/>
                                    </div>
                                    <h1 className="font-semibold mt-1 ml-2">
                                        Today
                                    </h1>
                                </div>
                                <div className="total self-start">
                                    <h2 className="text-xl font-bold">30</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gray-700 p-4 w-52 max-w-xs h-fit cursor-pointer">
                            <div className="flex justify-between p-2">
                                <div className="self-center">
                                    <div className="bg-error text-error-content p-2 rounded-full w-fit h-fit">
                                        <SlCalender size={24}/>
                                    </div>
                                    <h1 className="font-semibold mt-1 ml-2">
                                        Scheduled
                                    </h1>
                                </div>
                                <div className="total self-start">
                                    <h2 className="text-xl font-bold">30</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gray-700 p-4 w-52 max-w-xs h-fit cursor-pointer">
                            <div className="flex justify-between p-2">
                                <div className="self-center">
                                    <div className="bg-base-100 text-base-content p-2 rounded-full w-fit h-fit">
                                        <BsInboxFill size={24}/>
                                    </div>
                                    <h1 className="font-semibold mt-1 ml-2">
                                        All
                                    </h1>
                                </div>
                                <div className="total self-start">
                                    <h2 className="text-xl font-bold">30</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gray-700 p-4 w-52 max-w-xs h-fit cursor-pointer">
                            <div className="flex justify-between p-2">
                                <div className="self-center">
                                    <div className="bg-warning text-warning-content p-2 rounded-full w-fit h-fit">
                                        <BsFlagFill size={24}/>
                                    </div>
                                    <h1 className="font-semibold mt-1 ml-2">
                                        Flagged
                                    </h1>
                                </div>
                                <div className="total self-start">
                                    <h2 className="text-xl font-bold">30</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gray-700 p-4 w-52 max-w-xs h-fit cursor-pointer">
                            <div className="flex justify-between p-2">
                                <div className="self-center">
                                    <div className="bg-gray-500 p-2 rounded-full w-fit h-fit">
                                        <GrCompliance size={24}/>
                                    </div>
                                    <h1 className="font-semibold mt-1 ml-2">
                                        Completed
                                    </h1>
                                </div>
                                <div className="total self-start">
                                    <h2 className="text-xl font-bold">30</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-8 py-2 w-full">
                    <div className="">
                        <h2 className="text-2xl">Today</h2>
                    </div>
                </div>
            </div>
        </main>
    </Layout>)
}