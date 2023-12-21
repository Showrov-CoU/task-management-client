import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
// import { useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "./../Hooks/useAuth";
import toast from "react-hot-toast";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};

const Topbar = () => {
  // const [scrolling, setScrolling] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((err) => toast.error(err.message));
  };

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <Navbar
      fluid
      rounded
      // className={`${scrolling ? "bg-slate-100 rounded-xl" : ""}`}
      className="bg-slate-100"
    >
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-2xl font-extrabold text-[#ff0000]">
          TaskMinder
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline
          label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm text-center">
              {user?.displayName}
            </span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff0000] text-base flex items-center"
              : "text-base flex items-center"
          }
        >
          <span className="">Home</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff0000] text-base flex items-center"
              : "text-base flex items-center"
          }
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff0000] text-base flex items-center"
              : "text-base flex items-center"
          }
        >
          <span>All Task</span>
        </NavLink>

        {user ? (
          <NavLink>
            <Button onClick={handleLogout} theme={customTheme} color="primary">
              Log out
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <Button theme={customTheme} color="primary">
              Log in
            </Button>
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
