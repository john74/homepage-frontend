"use client";

import { useSignUp } from "@hooks";


const SignUpPage = () => {
    const {
        email, username, password,
        onChange, onSubmit,
    } = useSignUp();
    return (
        <>
        <input type="email" id="email" name="email" onChange={onChange} />
        <input type="username" id="username" name="username" onChange={onChange} />
        <input type="password" id="password" name="password" onChange={onChange}/>
        <button onClick={onSubmit}>Sign up</button>
        </>
    )
}

export default SignUpPage;