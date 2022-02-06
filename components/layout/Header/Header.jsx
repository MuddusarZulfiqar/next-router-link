import React from "react";
import Link from "next/link";
import NavLink from '@/components/common/NavLink'
function Header() {
  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink activeClassName="active" href="/">
            <a >Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" href="/about">
            <a >About</a>
          </NavLink>
          <ul>
            <li>
              <NavLink activeClassName="active" href="/about/resources">
                <a >Resources</a>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" href="/about/links">
                <a >Links</a>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" href="/about/tutorial">
                <a >Tutorials</a>
              </NavLink>
              <ul>
                <li>
                  <NavLink activeClassName="active" href="/about/tutorial/js">
                    <a >JavaScript</a>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink activeClassName="active" href="/contact">
            <a >Contact</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
