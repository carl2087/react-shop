import React from "react";
import './styles.scss';
import Logo from '../../assets/react-shop-logo.png'
import { NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={Logo} alt="ReactShop LOGO" />
                    </NavLink>
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <NavLink to='/registration'>
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
