import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const user = 'null';

  return (
    <div className="shadow">
      <div className="navigationBarContainer  h-[4.8rem]">
        <div className="navigationBar h-[4.8rem] flex items-center justify-between">
          <div className="logo flex items-center">
            <img className="h-[5rem]" src="HeroVerse.svg" alt="" />
          </div>
          <div className="menuItems flex justify-center items-center gap-10">
            <ul className="flex gap-10">
              <div className="hidden gap-8 text-white lg:flex">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                  }
                >
                  <li className="hover:text-purple-500 hover:transition hover:duration-500 cursor-pointer">
                    Home
                  </li>
                </NavLink>

                <NavLink
                  to="/allToys"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                  }
                >
                  <li className="hover:text-purple-500 hover:transition hover:duration-500 cursor-pointer">
                    All Toys
                  </li>
                </NavLink>

                <NavLink
                  to="/myToys"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                  }
                >
                  <li className="hover:text-purple-500 hover:transition hover:duration-500 cursor-pointer">
                    My Toys
                  </li>
                </NavLink>
                <NavLink
                  to="/addAToy"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                  }
                >
                  <li className="hover:text-purple-500 hover:transition hover:duration-500 cursor-pointer">
                    Add Toys
                  </li>
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                  }
                >
                  <li className="hover:text-purple-500 hover:transition hover:duration-500 cursor-pointer">
                    Blogs
                  </li>
                </NavLink>
              </div>
            </ul>
            {user ? (
              <Link to="/">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  লগিন
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
