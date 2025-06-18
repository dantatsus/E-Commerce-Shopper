// src/Components/Navbar/Navbar.js
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setActiveMenu('shop')}>
          <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
          {activeMenu === 'shop' && <hr />}
        </li>
        <li onClick={() => setActiveMenu('mens')}>
          <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
          {activeMenu === 'mens' && <hr />}
        </li>
        <li onClick={() => setActiveMenu('womens')}>
          <Link to="/womens" style={{ textDecoration: 'none' }}>Women</Link>
          {activeMenu === 'womens' && <hr />}
        </li>
        <li onClick={() => setActiveMenu('kids')}>
          <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
          {activeMenu === 'kids' && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
