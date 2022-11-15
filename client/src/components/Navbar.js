import React from 'react';
import { Menu, Label } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import bonezmedialogo from "../images/bonezmedialogo.png";
import "./Navbar.css";


function Navbar() {

    return (
        <div className='nav'>
            <div className='nav-header'>
                <img src={bonezmedialogo} alt="bonezmedialogo" className='logo'/>
                <div className='nav-name'>
                    Bonez Media
                </div>
            </div>

            <Menu as={"nav"} inverted color='red' size='huge' fluid widths={5}>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name='home'
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    to="diy"
                    name='diy'
                >
                    DIY
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    to="installs"
                    name='installs'
                >
                    Installs
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    to="shop"
                    name='shop'
                    >
                    Shop
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    to="cart"
                    name='cart'
                    >
                    Cart
                    <Label color='orange'>1</Label>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navbar;