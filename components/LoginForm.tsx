import Link from "next/link";

export default () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 lg:max-w-md">
                <h1 className="text-3xl font-semibold text-center">
                    Login
                </h1>
                <form className="mt-6">
                    <div>
                        <label htmlFor="email" className="block text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-4">
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a href="#" className="text-xs text-gray-600 hover:underline">
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md focus:outline-none"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        className="font-medium hover:underline"
                        href="/register"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};
