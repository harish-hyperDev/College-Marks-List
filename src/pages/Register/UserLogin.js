import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios';
import './DevStyle.css'

export default function DevLoginProfile() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [profiles, setProfiles] = useState({});

    window.onload = function() {
        if(!window.location.hash) {
            window.location = window.location + '#login';
            window.location.reload();
        }
    }

    useEffect(() => {
        localStorage.setItem('user_type', 'null');
        localStorage.setItem('rl', 'false');
        localStorage.setItem('devLoggedIn', 'false');

        axios.post('http://localhost:3001/loggedInUser', {name: "", _id: 0, subject: "",branch:"",email:""})

        axios.get("http://localhost:3001/admins")
            .then(res => {setProfiles(res.data)},
        )
    }, [])

    let users = profiles;
    const changeHandlerEmail = (e) => {
        setEmail(document.getElementsByClassName('email-input')[0].value.toLowerCase())
    }

    const changeHandlerPass = (e) => {
        setPass(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/register')
    }

    const checkCred = (e) => {
        e.preventDefault();
        users = profiles;
        users.filter((user, index) => {
            if (user.email === email && user.password === pass) {
                document.getElementsByClassName('hidden-validator')[0].style.display = "none";
                if (user.user_type === "Admin") {
                    // axios.post('http://localhost:3001/loggedInUser', {name: user.name, id: user.id, subject: user.subject, branch: user.branch, email: user.email})
                    axios.post('http://localhost:3001/loggedInUser', {name: user.name, _id: user._id})
                    localStorage.setItem("user_type", "Admin")
                    profiles[profiles.length - 1].isCustomerR = false
                    toast.success("Welcome " + user.name + " (admin)");
                    navigate(`/home`);
                }
                if (user.user_type === "Developer") {
                    axios.post('http://localhost:3001/loggedInUser', {name: user.name, _id: user._id})
                    localStorage.setItem("user_type", "Developer")
                    profiles[profiles.length - 1].isCustomerR = false
                    toast.success("Welcome " + user.name + " (Developer)");
                    navigate(`/users/${user._id}`);
                }
            }
            else {
                if (index === user.length - 1) {
                    document.getElementsByClassName('hidden-validator')[0].innerHTML = "Invalid Credentials";
                    document.getElementsByClassName('hidden-validator')[0].style.display = "block";
                }
            }
        })
    }

    return (
        <>
            <div className="login-page">
                <div className="centered-login">
                    <h3 className='login-heading'>Login</h3>
                    <form className='login-form'>
                        <div className='child-login'>
                            <label>Email:</label>
                            <input className='email-input' onChange={changeHandlerEmail} type="text" />
                            <label>Password:</label>
                            <input onChange={changeHandlerPass} type="password" />
                        </div>
                        <span className='hidden-validator'></span>
                        <input className='submit-button' onClick={checkCred} type="submit" value="Sign In" />
                        <input className='submit-button' onClick={handleSignUp} type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    );
}
