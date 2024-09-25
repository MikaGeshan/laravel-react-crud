import { Link, useForm } from "@inertiajs/react";

function Signup() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/signup");
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password:</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password_confirmation ? 'border-red-500' : ''}`}
                            />
                            {errors.password_confirmation && (
                                <span className="text-red-500 text-sm">{errors.password_confirmation}</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-500 text-white py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                            disabled={processing}
                        >
                            {processing ? "Processing..." : "Sign Up"}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link href="/login" className="text-slate-500 hover:underline">
                            Already have an account? Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

Signup.layout = (page) => page; // Disable layout

export default Signup;
