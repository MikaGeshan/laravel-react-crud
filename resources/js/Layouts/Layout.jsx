import { Link, useForm } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import { MdExitToApp } from "react-icons/md"; // Import ikon exit dari react-icons

export default function Layout({ children, layout = true }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
    };

    if (!layout) {
        return children;
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <header className="p-1 bg-gray-100 border-b flex justify-between items-center">
                    <div className="flex-1">
                    </div>
                    <div className="p-2">
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 text-black"
                        >
                            <MdExitToApp size={25} />
                            <span>Logout</span>
                        </Link>
                    </div>
                </header>
                <main className="p-2">{children}</main>
            </div>
        </div>
    );
}
