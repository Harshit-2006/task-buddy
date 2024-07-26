import { ChevronDown, ChevronUp } from "lucide-react";

function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-[#121212]">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              Organize your tasks effortlessly with Task Buddy
            </h1>
            <p className="mt-8 text-lg text-gray-300">
              Stay on top of your tasks and boost your productivity with Task Buddy. Create, manage, and track your to-do list seamlessly.
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"></input>
                <p className="mt-2 text-sm text-gray-500">
                  We care about your privacy
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-800 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="flex flex-col items-center space-y-16 md:flex-row md:justify-center md:space-x-16 md:space-y-0">
          <div className="text-center max-w-xs">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500">
              <svg
                className="h-9 w-9 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Fast & Easy to Use
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Task Buddy is designed to be fast and easy to use, so you can focus on getting things done.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500">
              <svg
                className="h-9 w-9 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Light & Dark Modes
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Choose between light and dark modes to suit your preference and work comfortably,Currently not available.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl bg-gray-900 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 lg:mx-auto">
              Find answers to common questions about Task Buddy.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            <div className="cursor-pointer rounded-md border border-gray-700 shadow-lg transition-all duration-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold text-white">
                  How do I get started with Task Buddy?
                </span>

                <ChevronUp className="h-5 w-5 text-gray-500" />
              </button>
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-400">
                  To get started with Task Buddy, simply create an account and start adding your tasks. You can organize your tasks into different categories and track their progress.
                </p>
              </div>
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-md border border-gray-700 transition-all duration-200">
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center">
                  <span className="flex text-start text-lg font-semibold text-white">
                    What is the difference between a free and paid account?
                  </span>
                  <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-base mt-6 text-center text-gray-300">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-orange-500 hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
