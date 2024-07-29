import { NavLink, Link,useNavigate } from "react-router-dom";
import useDashboardContext from "../contexts/dashboardContext";
import useUserDataContext from "../contexts/userDataContext";
import { useEffect } from "react";
import authService from "../appwrite/auth";

function Navbar() {

  const navigate=useNavigate();

  const { sessionCookie, updateSessionCookie } = useUserDataContext();

  useEffect(() => {
    updateSessionCookie(window.localStorage.getItem("cookieFallback"));
  }, [updateSessionCookie]);

  const { isDashboard: dashBoard } = useDashboardContext();

  const menuItems = [
    {
      name: "Home",
      href: "/",
      isDashboard: true,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      isDashboard:(sessionCookie)? true : false,
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

  async function handleClick(){
    await authService.logout();
    window.localStorage.clear();
    updateSessionCookie("");
    navigate("/")
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
        <div className="hidden space-x-2 lg:block">
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
          {/* logout button */}
          {dashBoard && (
            <button
              onClick={handleClick}
              className={`rounded-md border md:py-0.5 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500`}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
