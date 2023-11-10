"use client";
import styles from '../../styles/Forms.module.css';
import Link from 'next/link';
import { useSignIn } from "@hooks";
import { redirect } from 'next/navigation';


const SignInPage = () => {
    const {
        email, password, signInSuccess,
        onChange, onSubmit
    } = useSignIn();

    if (signInSuccess) {
        redirect('/');
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <h1 className={styles.title}>Sign in</h1>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input className={styles.input} type="email" id="email" name="email" onChange={onChange} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input className={styles.input} type="password" id="password" name="password" onChange={onChange}/>
                    </div>
                    <input className={styles.input} type="submit" value="Sign in" onClick={onSubmit}/>
                    <div className={styles.authOptions}>
                        <span className={styles.text}>Don't have an account?</span>
                        <Link className={styles.link} href="/sign-up/">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;