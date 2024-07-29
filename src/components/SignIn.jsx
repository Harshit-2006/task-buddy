import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import useErrorContext from "../contexts/errorContext";
import Modal from "./ModalWindow/Modal";
import Error from "./ModalWindow/Error";
import useUserDataContext from "../contexts/userDataContext";

function SignIn() {
  const navigate = useNavigate();

  const { updateUserData, updateSessionCookie } = useUserDataContext();

  const { error, errorText, errorExists, errorNotExists, errorMessage } =
    useErrorContext();

  //adding useEffect that will openModal on the mount of this component if the error exists
  useEffect(() => {
    if (error) openModal();
  }, [error]);

  // to control the modal window
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    errorNotExists();
    errorMessage("");
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    authService.logout();
    const response = await authService.login(userData);
    // console log to check the response code
    console.log(response);
    if (response.$id) {
      setUserData({
        email: "",
        password: "",
      });
      console.log(response);
      updateSessionCookie(window.localStorage.getItem("cookieFallback"));
      updateUserData(response);
      navigate("/dashboard");
    } else if (response === 401 || response === 400) {
      errorExists();
      errorMessage("Invalid credentials. Please check the email and password.");
      openModal();
    } else if (response === 429) {
      errorExists();
      errorMessage("Error :: Rate Limit :: Exceede  Try Again Later");
      openModal();
    } else {
      errorExists();
      errorMessage("Error Occurred :: Try Again Later");
      openModal();
    }
  }

  return (
    <>
      {error && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Error errorMessageText={errorText} />
        </Modal>
      )}
      <section className="bg-[#121212] min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-orange-500 transition-all duration-200 hover:underline">
              Create a free account
            </Link>
          </p>
          <form onSubmit={handleSubmit} method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-300">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-[#1E1E1E] px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-300">
                    Password
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-orange-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-[#1E1E1E] px-3 py-2 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-400">
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-600 bg-[#1E1E1E] px-3.5 py-2.5 font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none">
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-600 bg-[#1E1E1E] px-3.5 py-2.5 font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none">
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
