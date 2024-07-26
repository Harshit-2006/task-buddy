import { ArrowLeft } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";

function NotFound() {
  const navigate=useNavigate();
  return (
    <div className="py-10 bg-[#121212] min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-base font-semibold text-orange-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4">
          <button
            type="button"
            onClick={()=>navigate(-1)}
            className="inline-flex items-center rounded-md border border-orange-500 px-3 py-2 text-sm font-semibold text-orange-500 shadow-sm bg-black hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <Link
            to="contact"
            className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
