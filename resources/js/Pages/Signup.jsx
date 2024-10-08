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
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <h1 className="mb-6 text-center text-sm text-gray-500">Create an account to continue</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm Password"
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
                            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
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
