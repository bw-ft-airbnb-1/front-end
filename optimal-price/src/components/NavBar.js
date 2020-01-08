import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText,
    ButtonDropdown,
    Button
} from 'reactstrap';

import './NavBar.css';

// import { AddListing } from './Dashboard/AddListing';
// import { Dashboard } from './Dashboard/Dashboard';
// import { MyListings } from './Dashboard/MyListings';
// import { TransitionPropTypeKeys } from 'reactstrap/lib/utils';


export const NavBar = () => {

    const [collapsed, setCollapsed] = useState(true)
    
    // useHistory hook
   const history = useHistory();
    
    

    const toggleNavbar = () => setCollapsed(!collapsed)

    const logout = event => {
        event.preventDefault();

        localStorage.removeItem('token')

        history.push('/')
    }

    return(
        
    <div>
        <Navbar className="nav-container" expand="md">
        <NavbarBrand className="mr-auto" href="/dashboard"> AirBNB Optimal Price </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2">
            <ButtonDropdown>Menu</ButtonDropdown>
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
            <Nav className="navItem-container" navbar>
                <NavItem>
                    <NavLink className="navLink" href="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navLink" href="/newlisting">Add a Listing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navLink" href="/listings">My Listings</NavLink>
                </NavItem>
                <Button onClick={logout} className="signout-btn">
                    <NavLink className="navLink" href=" ">Sign Out</NavLink>
                </Button>
            </Nav>
        </Collapse>
    </Navbar>
    </div>
    )
}