import { NavLink, Link } from "react-router-dom";

function Navbar({ isDashboard = false }) {
  const menuItems = [
    {
      name: "Home",
      href: "/",
      isDashboard: true,
    },
    {
      name: "Dashboard",
      href: "dashboard",
      isDashboard: true,
    },
    {
      name: "About",
      href: "about",
      isDashboard: true,
    },
    {
      name: "Contact Us",
      href: "contact",
      isDashboard: true,
    },
  ];

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
            {menuItems.map((item) =>
              item.isDashboard ? (
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
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        {isDashboard ? (
          ""
        ) : (
          <div className="hidden space-x-2 lg:block">
            <NavLink
              to="signup"
              className={({ isActive }) =>
                `rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  isActive ? "text-orange-500" : "text-gray-300"
                }`
              }>
              SignUp
            </NavLink>
            <NavLink
              to="login"
              className={({ isActive }) =>
                `rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:bg-orange-500 hover:text-black hover:border-orange-500 ${
                  isActive
                    ? "border-orange-500 bg-orange-500 text-black"
                    : "text-gray-300 border-gray-300"
                }`
              }>
              SignIn
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
