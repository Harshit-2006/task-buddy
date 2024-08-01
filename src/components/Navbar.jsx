import { NavLink, Link, useNavigate } from "react-router-dom";
import useDashboardContext from "../contexts/dashboardContext";
import useUserDataContext from "../contexts/userDataContext";
import useFetchSessionData from "../hooks/useFetchSessionData";
import authService from "../appwrite/auth";

function Navbar() {
  useFetchSessionData();
  const { sessionCookie, updateSessionCookie } = useUserDataContext();

  const navigate = useNavigate();

  const { isDashboard: dashBoard } = useDashboardContext();

  const menuItems = [
    {
      name: "Home",
      href: "/",
      isDashboard: true,
    },
    {
      name: "Dashboard",
      href: sessionCookie ? `/dashboard/${sessionCookie["$id"]}` : "#",
      isDashboard: sessionCookie ? true : false,
    },
    {
      name: "About",
      href: "/about",
      isDashboard: !dashBoard,
    },
    {
      name: "Contact Us",
      href: "/contact",
      isDashboard: !dashBoard,
    },
  ];

  async function handleSignOut() {
    await authService.logout();
    updateSessionCookie("");
    navigate("/");
  }

  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to="/" className="font-bold text-orange-500">
            Task Buddy
          </Link>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map(
              (item) =>
                item.isDashboard && (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                          isActive ? "text-orange-500" : "text-gray-300"
                        } hover:text-orange-500`
                      }>
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:flex items-center">
          {!dashBoard && (
            <>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                    isActive ? "text-orange-500" : "text-gray-300"
                  }`
                }>
                Sign Up
              </NavLink>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 ${
                    isActive
                      ? "border-orange-500 bg-orange-500 text-black"
                      : "text-gray-300 border-gray-300"
                  }`
                }>
                Sign In
              </NavLink>
            </>
          )}
          {dashBoard && (
            <>
              <button
                onClick={handleSignOut}
                className={`rounded-md border md:py-0.5 px-3 py-2 mx-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500`}>
                Sign Out
              </button>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.76 0-5.26-1.12-7.07-2.93C6.74 15.04 9.28 14 12 14s5.26 1.04 7.07 2.93C17.26 18.88 14.76 20 12 20zm0-16c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
                </svg>
                <span className="text-gray-300 hover:text-orange-500 lowercase font-semibold">
                  @{sessionCookie?.name || "User"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
