import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import Logo from "../../assets/react-shop-logo.png";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="ReactShop LOGO" />
          </NavLink>
        </div>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <NavLink to="/dashboard">My Account</NavLink>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <NavLink to="/registration">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
