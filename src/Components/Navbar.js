import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../Data/MenuData";
  
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { toggle, navBarBackground, backgroundPages } = useGlobalContext();
  return (
    <NavWrapper fixedNav={navBarBackground} backgroundPages={backgroundPages}>
      
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
      </NavBtn>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: 0.5s;
  background: ${({ fixedNav, backgroundPages }) =>
    fixedNav ? "#011627" : backgroundPages ? "rgba(0, 9, 51, 0.9)" : null};
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;



const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  &:hover {
    border-bottom: 2px solid #000;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
