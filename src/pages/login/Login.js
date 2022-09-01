import React, {useContext, useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {AuthContext} from "../../components/auth context/AuthContextProvider";
import './Login.css';
import quote from "../../assets/Login quote.png";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);


    async function userLogin(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post(' http://localhost:3000/login', {
                email: email,
                password: password,
            });

            login(response.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }


    return (
        <div className="background">
        <div className="login-outer-container">
            <div className="login-inner-container">
                <div className="login-text-container">
                    <h2 className="login">LOGIN</h2>

                    <form
                        onSubmit={userLogin}
                        className="login-form">
                        <p>
                            <div className="input-fields">
                                <label htmlFor="signin-email">
                                    <input
                                        className="login-input"
                                        type="email"
                                        id="login-email"
                                        placeholder="E-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </label>
                                <label htmlFor="signin-password">
                                    <input
                                        className="login-input"
                                        type="password"
                                        id="login-password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </label>
                                {error && <p className="error">Incorrect e-mail or password </p>}
                            </div>
                        </p>

                        <button
                            className="login-button"
                            type="submit"
                        >
                            login
                        </button>
                    </form>

                    <p>Don't have an account yet? <Link to="/signup" className="register-link">sign up</Link></p>


                </div>
                <img className="noodles" src={quote} alt="Noodles"/>
            </div>
        </div>
        </div>
    );
}

export default Login;


