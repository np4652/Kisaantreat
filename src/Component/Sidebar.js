import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
            >
              <NavLink to="/Form">
                <i className="bi bi-journal-text"></i>
                <span>Forms</span>
              </NavLink>

              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Layouts</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink to="/Dashboard" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/Package" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Package</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/PackagePopup" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>PackagePopup</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Garbage" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Garbage</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
