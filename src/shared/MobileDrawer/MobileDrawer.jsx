import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function MobileDrawer() {
  const user = null;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {user ? (
        <div className="flex bg-gradient-to-br from-purple-600 to-blue-500 justify-center">
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm w-full px-16 py-2.5 text-center mr-2 mb-2"
            >
              My Profile
            </button>
          </Link>
        </div>
      ) : (
        <ul>
          <div className="flex bg-gradient-to-br from-purple-600 to-blue-500 justify-center">
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm w-full px-16 py-1.5 text-center mr-2 mb-2"
              >
                Login
              </button>
            </Link>
          </div>

          
          <Link to='/'><li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">Home</li></Link>
          <Link to='/allToys'><li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">All Toys</li></Link>
          {user && <div>
            <Link to='/myToys'><li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">My Toys</li></Link>
          <Link to='/addAToy'><li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">Add A Toy</li></Link></div>}
          <Link to='/blogs'><li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">Blogs</li></Link>
        
        </ul>
      )}
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon></MenuIcon>
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
