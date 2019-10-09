import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Link } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-SPORTS 4 BIZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <Router>
                    <li className="nav-item active">
                    <Link exact path="/" className="nav-link">Overview<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Overwatch" className="nav-link">Overwatch</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/LOL" className="nav-link">League of Legends</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Dota2" className="nav-link">Dota2</Link>
                    </li>
                    </Router>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

