import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { checkUserIsAdmin } from "../../utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <NavLink to="/admin">My Admin</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminToolbar;
