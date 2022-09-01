import React, {useContext, useEffect} from 'react';
import {useState} from "react";
import {AuthContext} from "../../components/auth context/AuthContextProvider";
import axios from "axios";
import './Profile.css';
import profileIcon from "../../assets/user-solid.svg";
import mailIcon from "../../assets/email.svg";
import profilePic from "../../assets/profilepic.png"


function Profile() {


    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);

    useEffect(() => {

        async function fetchProfileData() {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();

    }, []);

    return (
        <div className="profile-outer-container">
            <div className="profile-outer-container">

                <div className="profile-info-outer">
                    <div className="profile-info-inner">
                        <img className="profile-pic" src={profilePic} alt="Hele hele mooie profielfoto"/>
                        <div className="profile-info-username">

                            <img className="profile-icon" src={profileIcon} alt="Username: "/>
                            <p>{user.username}</p>
                        </div>
                        <div className="profile-info-email">
                            <img className="profile-icon" src={mailIcon} alt="E-mail: "/>
                            <p>{user.email}</p>
                        </div>
                        <button
                            className="logout-button"
                            type="button"
                            onClick={logout}
                        >
                            logout
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Profile;






