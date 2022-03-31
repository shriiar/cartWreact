import React from 'react';
import './Header.css'
import logo from "../../img/pngegg.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header text-center mb-5'>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    {/* <img src={logo} className="mb-5 img-fluid" alt="" width="50px" /> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <img src={logo} className="mb-5 img-fluid" alt="" width="100px" />
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart">Cart Overview</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;