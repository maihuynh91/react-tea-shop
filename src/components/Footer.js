import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
//import logo from '../logo.svg'
export default class Footer extends Component {
  render() {
    return (
      <FootWrapper className="page-footer font-small mdb-color pt-4">
        {/* Footer Links */}
        <div className="container text-center text-md-left">
          {/* Footer links */}
          <div className="row text-center text-md-left mt-3 pb-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Tea House</h6>
              <p>"Our mission is to make sure you get the best tasting cup of tea possible."</p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful Info</h6>
              <p>
                <Link to="/blog">Blogs</Link>
              </p>
              <p>
                <Link to="/calendar">Calendar</Link>
              </p>
              
              <p>
              <Link to="/privacy">Privacy</Link>
              </p>
              <p>
                <Link to="/terms">Terms&Conditions</Link>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>
                
                <Link to="/aboutus">About Us</Link>
              </p>
              <p>
                <Link to="/faq">FAQs</Link>
              </p>
              <p>
                <Link to="/shipping">Shipping</Link>
              </p>
              <p>
                <Link to="/help">Help</Link>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3" /> 1234 Patricia, Urbandale, 55323 IA, US</p>
              <p>
                <i className="fas fa-envelope mr-3" /> teahouse@teahouse.com </p>
              <p>
                <i className="fas fa-phone mr-3" /> 515-123-4545</p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Footer links */}
          <hr />
          {/* Grid row */}
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8">
              {/*Copyright*/}
              <p className="text-center text-md-left">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/">
                  <strong> teahouse@teahouse.com</strong>
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0">
              {/* Social buttons */}
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
      </FootWrapper>
    );
  }
}

const FootWrapper = styled.nav`
background: rgb(231, 188, 71);
.nav-link{
  color: var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize;
  position:absolute;
}
`

