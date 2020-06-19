import React, { Fragment } from "react";

import LoginButton from "./LoginButton";
import Burger from "./Burger";

import "../../styles/Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header-container">
        <div className="header-logo">Logo Here</div>
        <div className="header-interact">
          <div className="auth-btns">
            <LoginButton />
            <a
              href="https://signup.hive.io/"
              id="signup-btn"
              className="global-button"
            >
              Sign Up
            </a>
          </div>
          <div className="header-search">
            <i className="fas fa-search search-icon"></i>
            <input type="text" className="search-inp" placeholder="Search" />
          </div>
        </div>
      </div>
      <Burger />
    </Fragment>
  );
};

export default Header;
