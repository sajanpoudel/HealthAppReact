import React, { useState } from 'react';
import './login.css'; // Assuming that the CSS is in style.css in the same folder
import HomeHeader from '../views/components/homeheader';
import Dashboard from '../DashBoard/dashboard';
function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const toggleLogin = () => {
        setIsLogin(true);
    };

    const toggleSignup = () => {
        setIsLogin(false);
    };
    const handleLogin = () => {
        // Add your login logic here
        setIsLoggedIn(true);
    };

    const handleSignup = () => {
        // Add your signup logic here
        setIsLoggedIn(true);
    };
    console.log("isLogin:", isLogin);
    if (isLoggedIn) {
        return <Dashboard />;
    }


    return (
        <>
        <HomeHeader/>
        <br/><br/><br/>
        <div className="form-modal">
            <div className="form-toggle">
                <button id="login-toggle" onClick={toggleLogin}>log in</button>
                <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
            </div>

            {isLogin ? (
                <div id="login-form">
                    <form>
                        <input type="text" placeholder="Enter email or username"/>
                        <input type="password" placeholder="Enter password"/>
                        <button type="button" className="btn login" onClick={handleLogin}>login</button>
                        <p><a href="#">Forgotten account</a></p>
                        <hr/>
                    </form>
                </div>
            ) : (
                <div id="signup-form" className='show-form'>
                    <form>
                        <input type="email" placeholder="Enter your email"/>
                        <input type="text" placeholder="Choose username"/>
                        <input type="password" placeholder="Create password"/>
                        <button type="button" className="btn signup" onClick={handleSignup}>create account</button>
                        <p>Clicking <strong>create account</strong> means that you agree to our <a href="#">terms of services</a>.</p>
                        <hr/>
                    </form>
                </div>
            )}
        </div>

        </>      
    );
}

export default Login;
