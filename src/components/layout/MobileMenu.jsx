import React from "react";
import styled from "styled-components";

import "../../styles/MobileMenu.css";

const HiddenMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 650px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 19;
    li {
      color: #fff;
    }
  }
`;

const MobileMenu = ({ open }) => {
  return (
    <HiddenMenu open={open}>
      <div className="list-content">
        <li>Search</li>
        <li>Popular Posts</li>
        <li>Recent Posts</li>
        <li>User Posts</li>
        <li>Login</li>
        <li>Sign Up</li>
      </div>
    </HiddenMenu>
  );
};

export default MobileMenu;
