import React from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/react-shop-logo.png";
import { NavLink } from "react-router-dom";
import { signOutUserStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="ReactShop LOGO" />
          </NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/search'>
                Search
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <NavLink to="/dashboard">My Account</NavLink>
              </li>
              <li>
                <span onClick={() => signOut()}>LogOut</span>
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

export default Header;
