// import common from '../../assets/images/singleprofilesvgs/common.png'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DevStyle.css'

export default function DevRegisterProfile() {
    const [firstPass, setFirstPass] = useState('');
    const [secondPass, setSecondPass] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState();
    const [subject, setSubject] = useState('');
    const [branch, setBranch] = useState('');
    const navigate = useNavigate();

    // write a function for encryption


    useEffect(() => {
        axios.get('http://localhost:3001/admins').then(res => { setData(res.data) })
    }, [])

    const handleSignUp = (e) => {
        e.preventDefault();
        let name_verify = false
        let email_verify = false
        let verification = false

        axios.get('http://localhost:3001/admins').then(res => { setData(res.data)})
        data.map((user, index) => {
            document.getElementsByClassName("the-name")[0].setAttribute("style", "background: white;");
            let email_filter = data.filter(user => user.email === email)
            let atrate_check = email.search('@')
            let email_slice = email.slice(email.length - 4)
            let atrate_after = -1
            let regexMatch = false

            if (atrate_check !== -1) {
                atrate_after = atrate_check + 1;
                regexMatch = email[atrate_after].match(/^[a-zA-Z]+$/) === null ? false : true
            }


            if (name !== '' && firstPass !== '' && secondPass !== '' && firstPass === secondPass && email_filter.length === 0 && atrate_check !== -1 && atrate_after !== -1 && regexMatch && (email_slice === '.com' || email_slice === '.net' || email_slice === '.in' || email_slice === '.io')) {
                document.getElementsByClassName("firstpass")[0].setAttribute("style", "background: white;");
                document.getElementsByClassName("secondpass")[0].setAttribute("style", "background: white;");
                document.getElementsByClassName("the-hidden-element")[0].style.display = 'none';
                document.getElementsByClassName("the-hidden-email")[0].style.display = 'none';

                if (user.name.toLowerCase() === name.toLowerCase()) {
                    name_verify = false
                }
                else
                    name_verify = true

                if (user.email === email) {
                    email_verify = false
                    navigate('/register')
                }
                else {
                    email_verify = true
                    document.getElementsByClassName("the-email")[0].setAttribute("style", "background: white;");
                }
                if (name_verify === true && email_verify === true) {
                    verification = true
                }
            }

            else {
                let allChecks = 0;

                if (firstPass === '' || secondPass === '' || name === '' || email === '') {

                    if (firstPass === '') {
                        document.getElementsByClassName("firstpass")[0].setAttribute("style", "background: lightpink;");
                        document.getElementsByClassName("the-hidden-element")[0].innerHTML = "The highlighted fields are required";
                        document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                    }


                    if (secondPass === '') {
                        document.getElementsByClassName("secondpass")[0].setAttribute("style", "background: lightpink;");
                        document.getElementsByClassName("the-hidden-element")[0].innerHTML = "The highlighted fields are required";
                        document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                    }


                    if (name === '') {
                        document.getElementsByClassName("the-name")[0].setAttribute("style", "background: lightpink;");
                        document.getElementsByClassName("the-hidden-element")[0].innerHTML = "The highlighted fields are required";
                        document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                    }
                    else
                        document.getElementsByClassName("the-name")[0].setAttribute("style", "background: white;");

                    if (email === '') {
                        document.getElementsByClassName("the-email")[0].setAttribute("style", "background: lightpink;");
                        document.getElementsByClassName("the-hidden-element")[0].innerHTML = "The highlighted fields are required";
                        document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                    }
                    else
                        document.getElementsByClassName("the-email")[0].setAttribute("style", "background: white;");

                }
                else {
                    if (firstPass !== '' && secondPass !== '') {
                        document.getElementsByClassName("firstpass")[0].setAttribute("style", "background: white;");
                        document.getElementsByClassName("secondpass")[0].setAttribute("style", "background: white;");

                        if (firstPass !== secondPass) {
                            document.getElementsByClassName("firstpass")[0].setAttribute("style", "background: lightpink;");
                            document.getElementsByClassName("secondpass")[0].setAttribute("style", "background: lightpink;");
                            document.getElementsByClassName("the-hidden-element")[0].innerHTML = "Passwords do not match";
                            document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                        }
                        else {
                            if (atrate_check === -1 || atrate_after === -1 || (email_slice !== '.com' || email_slice !== '.net' || email_slice !== '.in' || email_slice !== '.io')) {
                                document.getElementsByClassName("the-email")[0].setAttribute("style", "background: lightpink;");
                                document.getElementsByClassName("the-hidden-email")[0].innerHTML = "Please enter a valid email address";
                                document.getElementsByClassName("the-hidden-email")[0].style.display = 'block';
                            }
                            else
                                document.getElementsByClassName("the-hidden-email")[0].style.display = 'none';

                            if (email === user.email) {
                                document.getElementsByClassName("the-email")[0].setAttribute("style", "background: lightpink;");
                                document.getElementsByClassName("the-hidden-element")[0].innerHTML = "The email address already exists";
                                document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                            }
                            else
                                allChecks = 1;
                        }
                    }

                }

                if (allChecks > 0) {
                    document.getElementsByClassName("the-hidden-element")[0].style.display = 'none';
                }

            }


        })

        if (verification) {
            if (firstPass !== '' && secondPass !== '') {
                if (firstPass === secondPass) {
                    document.getElementsByClassName("child-login")[0].remove();
                    document.getElementsByClassName("submit-button")[0].remove();
                    let divTag = document.createElement("div")
                    divTag.innerHTML = "Registration Successful";
                    divTag.setAttribute("style", "padding: 20px 0 25px 0; align-self: center;");
                    let redirect = document.createElement("div")
                    redirect.innerHTML = "Redirecting back to login page in few seconds";
                    document.getElementsByClassName("login-form")[0].appendChild(divTag);
                    document.getElementsByClassName("login-form")[0].appendChild(redirect);

                    let random = Math.floor(Math.random() * 10000000000000);

                    e.preventDefault();
                        // axios.post('http://localhost:3001/users', {
                    
                        //     id: random,
                        //     name: name,
                        //     email: email,
                        //     user_type: "Admin"
                        // })
                    axios.post('http://localhost:3001/admins', {
                        _id: random,
                        name: name,
                        email: email,
                        password: secondPass,
                        subject: subject,
                        branch: branch,
                        user_type: "Admin",
                    })
                    
                    setTimeout(function () {
                        navigate('/');
                    }, 1500);
                }
                else {
                    document.getElementsByClassName("firstpass")[0].setAttribute("style", "background: lightpink;");
                    document.getElementsByClassName("secondpass")[0].setAttribute("style", "background: lightpink;");
                    document.getElementsByClassName("the-hidden-element")[0].innerHTML = "Passwords do not match";
                    document.getElementsByClassName("the-hidden-element")[0].style.display = 'block';
                }
            }
        }
    }

    const handleFirstPass = (e) => {
        setFirstPass(e.target.value)
    }

    const handleSecondPass = (e) => {
        setSecondPass(e.target.value)
    }

    return (
        <div className='App'>
            <div className="register-page">
                <div className="centered-login">
                    <h3 className='login-heading'>Registration Page</h3>
                    <form className='login-form'>
                        <div className='child-login'>
                            <label>Name:</label>
                            <input className='the-name' onChange={(e) => setName(e.target.value)} type="text" />
                            <label>Email:</label>
                            <input className='the-email' onChange={(e) => setEmail(document.getElementsByClassName("the-email")[0].value.toLowerCase())} type="text" />
                            <label>Faculty Subject:</label>
                            <input className='the-name' onChange={(e) => setSubject(e.target.value)} type="text" />
                            <label>Faculty Branch:</label>
                            <input className='the-name' onChange={(e) => setBranch(e.target.value)} type="text" />
                            <label>Create Password:</label>
                            <input className='firstpass' onChange={handleFirstPass} type="password" />
                            <label>Confirm Password:</label>
                            <input className='secondpass' onChange={handleSecondPass} type="password" />
                        </div>
                        <span className='the-hidden-email'></span>
                        <span className='the-hidden-element'></span>
                        <input className='submit-button' onClick={handleSignUp} type="submit" value="Signup" />
                    </form>
                </div>
            </div>
        </div>
    );
}

