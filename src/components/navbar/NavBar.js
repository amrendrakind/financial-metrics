import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import image from '../../logo-finance.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/financial-metrics',
      text: 'Home Page',
    },
    {
      id: 2,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">

      <div className="brand-logo-container">
        <img className="spacelogo" src={image} alt="spacelogo" />
        <h2 className="nav-brand">Financial Metrices</h2>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li className="nav-link" key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>
  );
};
export default Navbar;
