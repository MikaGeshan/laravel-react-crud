import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "./../../../vendor/tightenco/ziggy/src/js/index";
import { useState, useEffect } from "react";

function Home({ airlines = [] }) { // Inisialisasi airlines dengan array kosong
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashMsg(null);
        }, 5000); // Hilang setelah 5 detik

        return () => clearTimeout(timer);
    }, [flashMsg]);

    console.log(usePage());
    return (
        <>
            <Head title={component} />
            <h1 className="title">Dashboard</h1>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}
            {flash.success && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flash.success}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Departure</h2>
                    <p className="text-2xl">1</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">On-going</h2>
                    <p className="text-2xl">0</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-orange-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Return</h2>
                    <p className="text-2xl">0</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Pembatalan</h2>
                    <p className="text-2xl">0</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-pink-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Airlines</h2>
                    <p className="text-2xl">{airlines.length}</p>
                    <Link href={route('airlines.index')} className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Airports</h2>
                    <p className="text-2xl">1</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Flight Classes</h2>
                    <p className="text-2xl">3</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Destinations</h2>
                    <p className="text-2xl">0</p>
                    <Link href="#" className="text-white underline">
                        More info
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
