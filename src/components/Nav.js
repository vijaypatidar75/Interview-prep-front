import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <h1 className="h1 inline ">
          <Link to="/">
            Interview<span className=" text-[#eb2121]">Prep</span>
          </Link>
        </h1>
        <Link to="/core-subject" className="a">
          CS Core
        </Link>

        <Link to="/dsa" className="a">
          DSA
        </Link>

        <Link to="/resouce" className="a">
          Resources
        </Link>
      </div>
      <div class="right-navbar">
        <Link to="/login" className="a ml-2">
          Log in
        </Link>
        <Link to="/signup" className="a">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Nav;
