"use client";

import Link from 'next/link';
import { useSignIn } from "@hooks";


const SignInPage = () => {
    const {
        email, password, onChange,
        onSubmit
    } = useSignIn();

    return (
        <div className="sign-in">
            <div className="form">
                <h3 className="form-title">Sign in</h3>

                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={onChange} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={onChange}/>
                </div>

                <button className="btn" onClick={onSubmit}>Sign in</button>
                <div className="auth-options">
                    <span className="text">Don't have an account?</span>
                    <Link className="link" href="/sign-up/">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;