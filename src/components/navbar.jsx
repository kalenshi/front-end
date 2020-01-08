import React, {Component} from 'react';

class NavBar extends  Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Athletes
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/upload">
                                Upload Athletes
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;