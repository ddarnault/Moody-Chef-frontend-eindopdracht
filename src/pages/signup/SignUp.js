import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import quote from "../../assets/Login quote.png";

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();


    async function userSignUp(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register',{
                email: email,
                password: password,
                username: username,
            });
            history.push('/login');

        } catch (e) {
            console.error(e);
            toggleError(true)
        }
        toggleLoading(false);
    }




    return (
        <body>
        <div className="background">
        <div className="login-outer-container">
            <div className="login-inner-container">
                <div className="login-text-container">
                    <h2 className="login">SIGN UP</h2>


                    <form
                        onSubmit={userSignUp}
                        className="login-form">
                        <p>
                            <div className="input-fields">
                                <label htmlFor="username">
                                    <input
                                        className="login-input"
                                        type="text"
                                        id="username"
                                        placeholder="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                </label>
                                <label htmlFor="signin-email">
                                    <input
                                        className="login-input"
                                        type="email"
                                        id="signin-email"
                                        placeholder="E-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </label>
                                <label htmlFor="signin-password">
                                    <input
                                        className="login-input"
                                        type="password"
                                        id="signin-password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </label>
                                {error && <p className="error">Oops... this account is already registered, please try another e-mail adres.</p>}
                            </div>
                        </p>

                        <button className="login-button"
                                type="submit"
                                disabled={loading}
                        >
                            create account
                        </button>

                    </form>

                    <p>Already have an account? <Link to="/login" className="register-link">login</Link></p>

                </div>
                <img className="noodles" src={quote} alt="Noodles"/>
            </div>
        </div>
        </div>
        </body>

    );
}

export default SignUp;


