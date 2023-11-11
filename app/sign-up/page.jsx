"use client";
import styles from '../../styles/Forms.module.css';
import Link from 'next/link';
import { useSignUp } from "@hooks";
import { redirect } from 'next/navigation';


const SignUpPage = () => {
    const {
        email, username, password, signUpSuccess,
        onChange, onSubmit
    } = useSignUp();

    if (signUpSuccess) {
        redirect('/sign-in/');
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <h1 className={styles.title}>Sign up</h1>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input className={styles.input} type="email" id="email" name="email" onChange={onChange} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="username">Username:</label>
                        <input className={styles.input} type="username" id="username" name="username" onChange={onChange} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input className={styles.input} type="password" id="password" name="password" onChange={onChange}/>
                    </div>
                    <input className={styles.input} type="submit" value="Sign up" onClick={onSubmit}/>
                    <div className={styles.authOptions}>
                        <span className={styles.text}>Already have an account?</span>
                        <Link className={styles.link} href="/sign-in/">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;