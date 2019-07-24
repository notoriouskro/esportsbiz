import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-SPORTS 4 BIZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../pages/Overwatch/Overwatch">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teams</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Marketing</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;

