"use client";

import Link from 'next/link';
import { useSignUp } from "@hooks";


const SignUpPage = () => {
    const {
        email, username, password,
        onChange, onSubmit,
    } = useSignUp();
    return (
        <div className="sign-up">
            <div className="form">
                <h3 className="form-title">Sign up</h3>

                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={onChange} />
                </div>
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <input type="username" id="username" name="username" onChange={onChange} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={onChange}/>
                </div>

                <button className="btn" onClick={onSubmit}>Sign up</button>
                <div className="auth-options">
                    <span className="text">Already have an account?</span>
                    <Link className="link" href="/sign-in/">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;