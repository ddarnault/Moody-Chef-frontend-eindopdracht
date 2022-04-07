import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className='nav-container'>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
