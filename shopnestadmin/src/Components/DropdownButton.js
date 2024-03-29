import React from "react";
import { Link } from "react-router-dom";

export default function DropdownButton() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle fw-semibold px-4"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/add-product">
            Add Product
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/orders">
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}
