import React from "react";
import './styles.scss';
import Logo from '../../assets/react-shop-logo.png'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="ReactShop LOGO" />
                </div>
            </div>
        </header>
    );
};

export default Header;
