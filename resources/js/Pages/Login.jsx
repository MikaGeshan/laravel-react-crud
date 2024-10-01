import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import background from "../../../public/assets/bckground.jpg"

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        stayLoggedIn: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <div className="flex max-w-7xl w-full p-10 bg-white rounded-lg shadow-lg">
                    {/* Left Section: Login form */}
                    <div className="w-1/2 pr-8 border-r border-gray-200">
                        {/* Title and subtitle */}
                        <h1 className="text-2xl font-semibold mb-4">Login</h1>
                        <p className="text-gray-500 mb-6">Login to your existing account</p>

                        {/* Error message */}
                        {errors.message && (
                            <div className="bg-red-500 text-white p-3 rounded-md mb-4">
                                {errors.message}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">{errors.email}</span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''
                                        }`}
                                />
                                <div
                                    className="absolute right-3 top-9 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <MdOutlineVisibilityOff className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <MdOutlineVisibility className="h-5 w-5 text-gray-500" />
                                    )}
                                </div>
                                {errors.password && (
                                    <span className="text-red-500 text-sm">{errors.password}</span>
                                )}
                            </div>

                            {/* Stay logged in */}
                            <div className="flex items-center justify-between mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.stayLoggedIn}
                                        onChange={(e) => setData("stayLoggedIn", e.target.checked)}
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Stay logged in</span>
                                </label>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                                disabled={processing}
                            >
                                {processing ? "Processing..." : "Log In"}
                            </button>
                        </form>
                    </div>

                    {/* Right Section: Inspirational Quote */}
                    <div className="w-1/2 pl-8 flex justify-center items-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-4"> Website is in Maintenance</h2>
                            <p className="text-gray-500">Stay Tune</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => page; // Disable layout

export default Login;
