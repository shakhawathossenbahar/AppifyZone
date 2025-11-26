import React from "react";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative p-3 font-semibold text-base cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#632EE3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 ${
            isActive ? "text-[#632EE3] after:scale-x-100 after:origin-left" : ""
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `relative p-3 font-semibold text-base cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#632EE3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 ${
            isActive ? "text-[#632EE3] after:scale-x-100 after:origin-left" : ""
          }`
        }
      >
        Apps
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `relative p-3 font-semibold text-base cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#632EE3] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 ${
            isActive ? "text-[#632EE3] after:scale-x-100 after:origin-left" : ""
          }`
        }
      >
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-12">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <li>
              <ul className="p-2"></ul>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img className="h-10 " src={logoImg} alt="Logo" />
        </Link>
        <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base font-bold hidden sm:block">
          AppifyZone
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          <li>
            <details className="block sm:hidden">
              <ul className="p-2">{links}</ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/shakhawathossenbahar"}>
          <button className="btn text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            {" "}
            <FaGithub />
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
