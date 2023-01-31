import React from 'react';
import { Menu, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import bonezmedialogo from "../images/bonezmedialogo.png";
import "./Navbar.css";
import { useCart } from '../context/cartContext';


function Navbar() {
    const {getTotalItems} = useCart();
    const cartTotalItems = getTotalItems();

    return (
        <div className='nav'>
            <div className='nav-header'>
                <img src={bonezmedialogo} alt="bonezmedialogo" className='logo'/>
                <div className='name'>
                    Bonez Media
                </div>
            </div>

            <Menu as={"nav"} inverted color='red' size='huge' fluid widths={4}>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name='home'
                >
                    Home
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
                    to="installs"
                    name='installs'
                >
                    Installs
                </Menu.Item>
                <Menu.Item
                    as={NavLink}
                    to="cart"
                    name='cart'
                    >
                    Cart
                    {cartTotalItems > 0 && <Label color='orange' floating>{cartTotalItems}</Label>}
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navbar;