import { useState } from "react";
import { Link } from "@inertiajs/react";
import { MdHome, MdFlight, MdAirplaneTicket, MdPeople, MdAirlineSeatReclineNormal, MdSettings, MdExpandMore, MdExpandLess } from "react-icons/md";

export default function Sidebar() {
    const [isTicketsOpen, setIsTicketsOpen] = useState(false);
    const [isFlightStatusOpen, setIsFlightStatusOpen] = useState(false);

    const toggleTicketsDropdown = () => {
        setIsTicketsOpen(!isTicketsOpen);
    };

    const toggleFlightStatusDropdown = () => {
        setIsFlightStatusOpen(!isFlightStatusOpen);
    };

    return (
        <div className="h-screen bg-gray-800 text-white w-60 flex flex-col">
            <div className="p-2 text-2xl font-bold border-b border-gray-700">
                Dashboard
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/home"
                            className="flex items-center p-2 rounded hover:bg-gray-700"
                        >
                            <MdHome className="mr-2" size={20} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <div
                            className="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer"
                            onClick={toggleFlightStatusDropdown}
                        >
                            <MdFlight className="mr-2" size={20} />
                            Flight Status
                            {isFlightStatusOpen ? <MdExpandLess className="ml-auto" /> : <MdExpandMore className="ml-auto" />}
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isFlightStatusOpen ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <ul className="ml-8 mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="/flights/status"
                                        className="block p-2 rounded hover:bg-gray-700"
                                    >
                                        View Status
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/flights/schedule"
                                        className="block p-2 rounded hover:bg-gray-700"
                                    >
                                        Flight Schedule
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div
                            className="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer"
                            onClick={toggleTicketsDropdown}
                        >
                            <MdAirplaneTicket className="mr-2" size={20} />
                            Tickets
                            {isTicketsOpen ? <MdExpandLess className="ml-auto" /> : <MdExpandMore className="ml-auto" />}
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isTicketsOpen ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <ul className="ml-8 mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="/tickets"
                                        className="block p-2 rounded hover:bg-gray-700"
                                    >
                                        View Tickets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/tickets/create"
                                        className="block p-2 rounded hover:bg-gray-700"
                                    >
                                        Create Ticket
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link
                            href="/customers"
                            className="flex items-center p-2 rounded hover:bg-gray-700"
                        >
                            <MdPeople className="mr-2" size={20} />
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/airline"
                            className="flex items-center p-2 rounded hover:bg-gray-700"
                        >
                            <MdAirlineSeatReclineNormal className="mr-2" size={20} />
                            Airlines
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-700">
                <Link
                    href="#"
                    method="post"
                    as="button"
                    className="flex items-center p-2 rounded hover:bg-gray-700 w-full text-left"
                >
                    <MdSettings className="mr-2" size={20} />
                    Settings
                </Link>
            </div>
        </div>
    );
}
