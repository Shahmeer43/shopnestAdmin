import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-center align-items-center">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <Link
            className="navbar-brand border-top border-bottom border-warning px-5"
            to="/"
          >
            Admin
          </Link>
        </div>
        <div className="mt-2 d-flex justify-content-center align-items-center">
          <DropdownButton></DropdownButton>
        </div>
      </nav>
    </>
  );
}
