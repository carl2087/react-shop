import React from "react";
import ShopMen from "../../assets/serious-handsome-young-man-sitting-isolated.jpg";
import ShopWomen from "../../assets/woman-with-shopping-bags-studio-yellow-background-isolated.jpg";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <NavLink to='/search/womens' className='homePageLinks'>
            Shop Womens
          </NavLink>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <NavLink to='/search/mens' className='homePageLinks'>
            Shop Mens
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Directory;
