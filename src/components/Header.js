import React from 'react'
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../img/Logo.png'

const Header = () => {
    const LinkOnClick = ()=>{
        const mobile_nav = document.querySelector('.mobile_nav');
        mobile_nav.classList.toggle('display');
        }
    const hamburgerOnClick = ()=>{
        const mobile_nav = document.querySelector('.mobile_nav');
       mobile_nav.classList.toggle('display');
    }
    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink exact to="/" > <img src={Logo} alt="" /></NavLink>
                </div>
                <div className="links">
                    <NavLink exact to="/" > Home  </NavLink>
                    <NavLink to="/works" > Works  </NavLink>
                    <NavLink to="/contact" > Contact  </NavLink>
                </div>
                <div className="hamburger_menu" onClick={hamburgerOnClick}>
                    <i className="fas fa-bars fa-4x"></i>
                </div>

            </nav>
            <div className='mobile_nav'>
                <div className="mobile_links">
                    <NavLink onClick={LinkOnClick} exact to="/" > Home  </NavLink>
                    <NavLink onClick={LinkOnClick} to="/works" > Works  </NavLink>
                    <NavLink onClick={LinkOnClick} to="/contact" > Contact  </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header
