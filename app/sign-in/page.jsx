"use client";

import { useRef } from "react";
import { signIn } from "next-auth/react";


const SignInPage = () => {
    const email = useRef("");
    const password = useRef("");

    const onSubmit = async () => {
        const signInData = await signIn("credentials", {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
        });
    };

    return (
        <>
        <input type="email" id="email" name="email" onChange={e => (email.current = e.target.value)} />
        <input type="password" id="password" name="password" onChange={e => (password.current = e.target.value)}/>
        <button onClick={onSubmit}>Sign in</button>
        </>
    )
}

export default SignInPage;