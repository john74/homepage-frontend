"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";


export default function useSignUp() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const { email, username, password } = formData;

    const onChange = event => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]:value })
    }

    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();
        const initOptions = {
            cache: "no-store",
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, password})
        }
        let response = await fetch(
            'http://localhost:3000/api/users/sign-up/',
            initOptions
        )

        const responseJSON = await response.json();

        if (responseJSON?.error) {
            toast.error(responseJSON.error);
        } else {
            setSignUpSuccess(true);
            toast.success(responseJSON.message);
        }
    };

    return {
        email, username, password, signUpSuccess,
        onChange, onSubmit
    }
}