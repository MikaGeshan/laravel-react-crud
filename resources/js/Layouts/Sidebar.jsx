import { Link } from "@inertiajs/react";
import { MdHome, MdFlight, MdAirplaneTicket, MdPeople, MdAirlineSeatReclineNormal, MdSettings } from "react-icons/md"; // Import ikon dari Material Icons

export default function Sidebar() {
    return (
        <div className="h-screen bg-gray-800 text-white w-60 flex flex-col">
            <div className="p-2 text-2xl font-bold border-b border-gray-700">
                Dashboard
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-4"> {/* Menambahkan space-y-4 untuk jarak antar item */}
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
                        <Link
                            href="/posts/create"
                            className="flex items-center p-2 rounded hover:bg-gray-700"
                        >
                            <MdFlight className="mr-2" size={20} />
                            Flight Status
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tickets"
                            className="flex items-center p-2 rounded hover:bg-gray-700"
                        >
                            <MdAirplaneTicket className="mr-2" size={20} />
                            Tickets
                        </Link>
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
                            href="/service-providers"
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
