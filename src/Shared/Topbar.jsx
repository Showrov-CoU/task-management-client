import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
// import { CustomFlowbiteTheme } from "flowbite-react";

const customTheme = {
  color: {
    primary: "text-white bg-[#ff0000] hover:bg-[#960000] hover:text-slate-100",
  },
};

const Topbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className={`${scrolling ? "bg-slate-100 rounded-xl" : ""}`}
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
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
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

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-[#ff0000] text-base" : "text-base"
          }
        >
          <Button theme={customTheme} color="primary">
            Login
          </Button>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
