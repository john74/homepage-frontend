"use client";


import { useSignIn } from "@hooks";

const SignInPage = () => {
    const {
        email, password, onChange,
        onSubmit
    } = useSignIn();

    return (
        <>
        <input type="email" id="email" name="email" onChange={onChange} />
        <input type="password" id="password" name="password" onChange={onChange}/>
        <button onClick={onSubmit}>Sign in</button>
        </>
    )
}

export default SignInPage;