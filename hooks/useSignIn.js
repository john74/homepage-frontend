"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';


export default function useSignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = event => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]:value })
    }

    const [signInSuccess, setSignInSuccess] = useState(false);
    const onSubmit = async () => {
        const response = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
            callbackUrl: "/"
        });

        if (response.error) {
            toast.error(response.error);
        } else {
            setSignInSuccess(true);
            toast.success("Login successful");
        }
    };

    return {
        email, password, signInSuccess,
        onChange, onSubmit
    }
}