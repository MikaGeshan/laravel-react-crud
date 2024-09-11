import { Link, useForm } from "@inertiajs/react";
import { route } from "../../../vendor/tightenco/ziggy/src/js";

export default function Show({ post }) {
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

                    {/* <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link> */}

                    <Link
                        href={route("posts.edit", post)}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link>
                </form>
            </div>
        </>
    );
}
