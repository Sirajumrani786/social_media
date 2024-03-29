import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        const item = { email, password };


        try {
            const response = await axios.post('http://localhost:8000/api/login/', item, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const token = response.data.token;
            console.log("yyyy" , token);

            // Store the token in local storage
            localStorage.setItem('token', token);

            console.log("token", token);
            if (response.status === 200) {
                navigate('/');
                console.log('Login successful');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    return (
        <div>
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0 show">
                    <div className="nav-top w-100">
                        <Link to="/">
                            <img src="assets/images/logo.jpeg" alt="" className='feather-zap text-success display1-size me-2 ms-0' style={{ width: '20%' }} />
                            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                                VibeHub{" "}
                            </span>{" "}
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" style={{ backgroundImage: "url(assets/images/login-bg.jpg)" }} />
                    <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                        <div className="card shadow-none border-0 ms-auto me-auto login-card">
                            <div className="card-body rounded-0 text-left">
                                <h2 className="fw-700 display1-size display2-md-size mb-3">
                                    Login into <br />
                                    your account
                                </h2>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0" />
                                        <input
                                            type="text"
                                            className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                            placeholder="Your Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input
                                            type="password"
                                            className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <i className="font-sm ti-lock text-grey-500 pe-0" />
                                    </div>
                                    <div className="form-check text-left mb-3">
                                    </div>
                                    <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">
                                        Login
                                    </button>
                                </form>
                                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                    Dont have an account {" "}
                                    <Link to="/register" className="fw-700 ms-1">
                                        Register
                                    </Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
