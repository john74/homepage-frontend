"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function useSignUp() {
    const router = useRouter();
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

    const onSubmit = async (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/api/users/sign-up/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, password})
        })
        .then(response => {
            if (response.ok) {
                router.push("/sign-in");
            }
        })
        .catch(error => {
            console.log(error);
        })
    };

    return {
        email, username, password,
        onChange, onSubmit
    }
}