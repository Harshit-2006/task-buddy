import { NavLink,Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
    isDashboard:true
  },
  {
    name:"Dashboard",
    href:"dashboard",
    isDashboard:true
  },
  {
    name: "About",
    href: "about",
    isDashboard:false
  },
  {
    name: "Contact Us",
    href: "contact",
    isDashboard:false
  },
];

function Navbar({isDashboard=false}) {
  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
        <Link to="/" className="font-bold text-orange-500">
            Task Buddy
            </Link>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              item.isDashboard ?<li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                    isActive ? "text-orange-500" : "text-gray-300"
                  } hover:text-orange-500`
                }>
                {item.name}
              </NavLink>
            </li> : ""
            ))}
          </ul>
        </div>
        {isDashboard ? "" : <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            Sign In
          </button>
          <button
            type="button"
            className="rounded-md border border-orange-500 px-3 py-2 text-sm font-semibold text-orange-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 hover:bg-orange-500 hover:text-black">
            Log In
          </button>
        </div> }
        
      </div>
    </div>
  );
}

export default Navbar;
