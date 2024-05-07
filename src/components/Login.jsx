import axios from "axios";
import { useState } from "react";

function Login(){
    const float={
        float:"right",
        marginRight:"50px", 
        color:"black"
    }
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [loginError,setLoginError]=useState('');
    const [data,setData]=useState();
    const [showMessage,setShowMessage]=useState('');

    function handleEmail(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setEmailError(validateEmail(newEmail) ? '' : 'Invalid Email Format');
    }
    function handlePassword(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordError(newPassword.length < 8 ? 'Password must be at least 8 characters long' : '');
    }
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (emailError || passwordError) {
            return;
        }
        const detail = {
            email: email,
            password: password
        }
        axios.post("http://localhost:4000/user/login", detail)
            .then((res) => {
                if(res.data.message == "true"){
                    window.location.href='/'
                }
                else{
                    setShowMessage("User not found Click the below link to register");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                setLoginError("An error occurred during login.");
            });
    }
    
    return(
        <div class="login">
            <h2>Login</h2>
            <p>Please enter your details</p>
            <br />
            <form id="loginform" >
                <input type="text" name="email" id="email" placeholder="Enter email address" onChange={handleEmail}/><br />
                <span id="email-error" class="error">{emailError}</span><br /><br />
                <input type="password" name="password" id="password" placeholder="Enter password" onChange={handlePassword}/><br />
                <span id="password-error" class="error">{passwordError}</span><br /> <br />
                <button type="submit" onClick={handleSubmit}>Login</button><br></br><br></br>
                <span id="login-error" class="error">{loginError}</span>
                <span className="error">{showMessage}</span>
            </form>
            <hr />
            <br />
            <p>If you don't have a account at BeeWays, Click below to register</p> 
            <a href="/signup" style={float}>Register for BeeWays</a>   
        </div>
    )
}
export default Login;