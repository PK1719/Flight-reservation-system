import axios from "axios";
import { useState } from "react";
import Success from "./Success";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cpasswordError, setCpasswordError] = useState('');
    const [cpassword, setConfirmPassword] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const [termsError,setTermsError]=useState('');
    const [data,setData]=useState('');
    const [showMessage,setShowMessage]=useState(false);

    function handleEmail(event) {
        setEmail(event.target.value);
        setEmailError(validateEmail(event.target.value) ? '' : 'Invalid Email Format');
    }

    function handleCpassword(event) {
        const cpasswordValue = event.target.value;
        setConfirmPassword(cpasswordValue);
        setCpasswordError(cpasswordValue === password ? '' : "Password doesn't match");
    }

    function handlePassword(event) {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        const lengthError = passwordValue.length < 8 ? 'Password must be at least 8 characters long' : '';
        const upperCaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
        const upperCaseError = upperCaseRegex.test(passwordValue) ? '' : 'Password must contain at least one uppercase letter';
        const numberError = numberRegex.test(passwordValue) ? '' : 'Password must contain at least one number';
        const symbolError = symbolRegex.test(passwordValue) ? '' : 'Password must contain at least one symbol';
        setPasswordError(lengthError || upperCaseError || numberError || symbolError);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleTerms(event) {
        setTermsChecked(event.target.checked);
        setTermsError(event.target.checked ? '' : 'You must agree to the terms and conditions');
    }
    function handleName(event){
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || cpassword.trim() === '' || !termsChecked) {
            alert('Please fill in all the required fields and agree to the terms and conditions.');
        } else if (emailError || passwordError || cpasswordError || termsError) {
            alert('Form submission prevented due to errors');
        } else {
            const details = {
                name: name,
                email: email,
                password: password,
                role: "customer"
            };
            axios.post("http://localhost:4000/user/signup", details)
                .then((res) => {
                    if (res.data.message === 'true') {
                        setShowMessage(true);
                    } else {
                        setShowMessage(false);
                    }
                })
                .catch((err) => {
                    console.error("Error occurred while signing up:", err);
                    alert("Error occurred while signing up. Please try again later.");
                });
        }
    }

    return (
        <>
        <div className="login" style={{ height: '800px' }}>
            <h2 style={{ color: 'rgb(0, 0, 93)', padding: '20px', paddingBottom: '0' }}>Sign Up</h2>
            <p style={{ marginLeft: '37px' }}>Come join us in our journey</p>
            <br />
        {showMessage && <Success />} 
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="fname" id="fname" placeholder="Name" onChange={handleName} /><br />
                <span className="error"></span><br /><br />
                <input type="text" name="email" id="email" placeholder="Email" onChange={handleEmail} /><br />
                <span id="email-error" className="error">{emailError}</span><br /><br />
                <input type="password" name="password" id="password" placeholder="Password" onChange={handlePassword} /><br />
                <span id="password-error" className="error">{passwordError}</span><br /><br />
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={handleCpassword} /><br />
                <span id="cpassword-error" className="error">{cpasswordError}</span><br /><br />
                <label>
                    I agree with the terms and conditions.
                    <input type="checkbox" name="terms" id="terms" checked={termsChecked} onChange={handleTerms} />
                    <span className="error">{termsError}</span>
                </label><br /><br />
                <span id="terms-error" className="error"></span>
                <button type="submit">Sign Up</button>
            </form>
            <br />
            <hr style={{ width: '90%', marginLeft: '30px' }} />
            <br />
            <p style={{ paddingLeft: '30px' }}>If you have an account at BeeWays, Click below to sign in</p>
            <a href="/login" style={{ float: 'right', marginRight: '70px' }}>Sign in to BeeWays</a>
        </div>
        </>
    )
}

export default SignUp;
