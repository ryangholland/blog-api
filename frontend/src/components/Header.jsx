import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/admin">Blog Admin Dashboard</Link>
      </div>
      <ul>
        <li>
          <Link to="/admin/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/admin/register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
