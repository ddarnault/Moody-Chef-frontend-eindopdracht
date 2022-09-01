import React, {useContext} from 'react';
import {useHistory, Link} from "react-router-dom";
import {AuthContext} from "../auth context/AuthContextProvider";
import './Header.css';
import logo from "../../assets/Logo-yellow-2.svg";


function Header() {

    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav className="navbar">
            <Link to="/">
                <span>
            <img className="logo-container" src={logo} alt="logo"/>
                </span>
            </Link>

            <button
                className="all-recipes"
                type="button"
                onClick={() => history.push('/allRecipes')}
            >
                all recipes
            </button>

            <div className="nav-container">

                <button
                    className="nav-button"
                    type="button"
                    onClick={() => history.push('/login')}
                >
                    login
                </button>

                <button
                    className="nav-button"
                    type="button"
                    onClick={() => history.push('/profile')}
                >
                    profile
                </button>


            </div>

        </nav>

    );
}

export default Header;





