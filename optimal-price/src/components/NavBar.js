import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import {
    Switch,
    Route
} from 'react-router-dom';

import { AddListing } from './Dashboard/AddListing';
import { Dashboard } from './Dashboard/Dashboard';
import { MyListings } from './Dashboard/MyListings';


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
  

    const toggle = () => setIsOpen(!isOpen)

    return(
    <div>
        <Navbar color="light" expand="md" position="fixed">
        <NavbarBrand href="/dashboard">Dashboard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="/newlisting">Add a Listing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/listings">My Listings</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href=" ">Sign Out</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    </div>
    )
}