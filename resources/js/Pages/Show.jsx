import { Link, useForm } from "@inertiajs/react";
import { route } from "../../../vendor/tightenco/ziggy/src/js";

export default function Show({ post, airlines }) { // Tambahkan airlines sebagai prop
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route("posts.destroy", post));
    }

    console.log(useForm);
    return (
        <>
            <h1 className="title">Page Show </h1>
            <div className="text-sm text-slate-600">
                <span>Posted on: </span>
                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className="font-medium">{post.body}</p>
            <div className="flex items-center justify-end">
                <form onSubmit={submit}>
                    <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                        Delete
                    </button>

                    <Link
                        href={route("posts.edit", post)}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link>
                </form>
            </div>

            {/* Tampilkan Data Airlines */}
            <h2 className="title mt-4">Airlines</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header">Logo</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(airlines) && airlines.map((airline, index) => (
                        <tr key={index}>
                            <td className="table-data">
                                <img src={airline.logo_url} alt={`${airline.name} logo`} className="airline-logo" />
                            </td>
                            <td className="table-data">{airline.name}</td>
                            <td className="table-data">{airline.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
