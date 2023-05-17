import { Link, NavLink } from "react-router-dom";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";

const NavigationBar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="shadow-purple-500 shadow-[0_2px_0px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]	">
      <div className="navigationBarContainer  h-[4.8rem]">
        <div className="navigationBar h-[4.8rem] flex items-center justify-between">
          <div className="logo flex items-center">
            <Link to="/">
              <img
                className="lg:h-[5rem] h-[3.5rem]"
                src="HeroVerse.svg"
                alt=""
              />
            </Link>
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

                {user && (
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
                )}
                {user && (
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
                )}
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
            <div className="hidden lg:block">
              {user ? (
                <Link to="/">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user&& user.photoURL} />
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

            <div className="block lg:hidden">
            <MobileDrawer></MobileDrawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
