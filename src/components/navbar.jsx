import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends  Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link m-2" to={{pathname:"/"}}>Athletes</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link m-2" to={{pathname:"/upload"}}>Upload Athletes</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}
export default NavBar;