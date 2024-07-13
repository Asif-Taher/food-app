import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menu, setMenu] = useState('home');
  return (
    <div className='navbar'>
     <img src={assets.logo} className='logo' alt="" />
     <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu==='home'?'active':''}> <Link to="/"> Home</Link></li>
        <li onClick={() => setMenu("menu")} className={menu==='menu'?'active':''}> <Link to="/menu"> Menu</Link></li>
        <li onClick={() => setMenu("mobile-app")} className={menu==='mobile-app'?'active':''}> <Link to='/mobile'>mobile-app</Link></li>
        <li  onClick={() => setMenu("contact us")}  className={menu==='contact'?'active':''}><Link to="/contact">contact us</Link></li>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button><Link to="/SignIn">Sign In</Link></button>
     </div>
    </div>
  )
}
