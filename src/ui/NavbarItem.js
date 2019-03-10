import React from 'react';
import { Link } from 'react-router';

const NavbarItem = (props) => (
    <Link to={props.path} className="nav-item nav-link navbar-link dropdown-item">{props.name}</Link>
); 

export default NavbarItem;