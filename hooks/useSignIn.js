"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";


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

    const onSubmit = async () => {
        await signIn("credentials", {
            email: email,
            password: password,
            redirect: true,
            callbackUrl: "/"
        });
    };

    return {
        email, password, onChange,
        onSubmit
    }
}