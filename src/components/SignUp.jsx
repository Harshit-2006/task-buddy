import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="bg-[#121212] min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-8">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-center text-xl font-bold leading-tight text-white">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-orange-500 transition-all duration-200 hover:underline">
            Sign In
          </Link>
        </p>
        <form action="#" method="POST" className="mt-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  className="flex h-9 w-full rounded-md border border-gray-700 bg-[#1E1E1E] px-3 py-1 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  className="flex h-9 w-full rounded-md border border-gray-700 bg-[#1E1E1E] px-3 py-1 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  className="flex h-9 w-full rounded-md border border-gray-700 bg-[#1E1E1E] px-3 py-1 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3 py-1.5 font-semibold leading-6 text-white hover:bg-orange-400">
                Create Account <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
        <div className="mt-3 space-y-2">
          <button
            type="button"
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-600 bg-[#1E1E1E] px-3 py-1.5 font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none">
            <span className="mr-2 inline-block">
              <svg
                className="h-5 w-5 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign up with Google
          </button>
          <button
            type="button"
            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-600 bg-[#1E1E1E] px-3 py-1.5 font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none">
            <span className="mr-2 inline-block">
              <svg
                className="h-5 w-5 text-[#2563EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </span>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
