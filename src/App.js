import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect
} from "react-router-dom";
import {AuthContext} from './components/auth context/AuthContextProvider.js';
import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/Profile";
import AllRecipes from "./pages/all recipes/AllRecipes";


function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/allRecipes">
                    <AllRecipes/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/signup">
                    <SignUp/>
                </Route>

                <Route path="/profile">
                    {isAuth ? <Profile/> : <Redirect to="/"/>}
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

