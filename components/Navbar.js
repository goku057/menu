import React from "react";
export const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Menu Koi</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Scan QR Code</a>
          </li>
          <li>
            <a className="btn-primary">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
