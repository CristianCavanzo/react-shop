import React, { useContext, useState } from 'react';
import '@styles/Header.css';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import AppContext from '../context/AppContext';
import { MyOrder } from '@containers/MyOrder';

const Header = () => {
    const {
        state: { cart },
    } = useContext(AppContext);
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    };
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li
                        className="navbar-shopping-cart"
                        onClick={handleToggleOrders}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 && <div>{cart.length}</div>}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export { Header };
