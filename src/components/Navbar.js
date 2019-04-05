import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { MDBIcon} from "mdbreact";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          {/*
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            <Link to="/">
            <img  src={logo} alt="store" /* className="navbar-brand" *//>
            </Link>
            <ul className="navbar-nav align-items-center">
            
              <h1 className="nav-link">TEA HOUSE</h1>
          
              <li className="nav-item ml-3">
              <Link to="/" className="nav-link">home</Link>
              </li>

              <li className="nav-item ml-1">
              <Link to="/products" className="nav-link">products</Link>
              </li>
              
              <li className="nav-item ml-1">
              <Link to="/aboutus" className="nav-link">about us</Link>
              </li>
              <li className="nav-item ml-1">
              <Link to="/faq" className="nav-link">FAQs</Link>
              </li>
              <li className="nav-item ml-1">
              <Link to="/blog" className="nav-link">blogs</Link>
              </li>
             
              <li className="nav-item ml-1">
              <Link to="/shipping" className="nav-link">shipping</Link>
              </li>
            </ul>

            <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
              <i className="fas fa-cart-plus" />
              </span>          
             my cart
            </ButtonContainer>
            </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background:  rgb(231, 188, 71);
.nav-link{
  color: var(--mainDark) !important;
  font-size:1.3rem;
  text-transform:capitalize;
}
`

