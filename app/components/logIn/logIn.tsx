import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './logIn.module.css';
import Image from 'next/image';
import { errorState, passwordState, usernameState } from "@/app/recoilAtoms";
import { LoginApi } from "@/app/Api/Auth.api";

const LogIn = () => {
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [error, setError] = useRecoilState(errorState);
    const [success, setSuccess] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const data = await LoginApi(username, password);
            setSuccess('Login successful!');
            console.log('Login successful:', data);
        } catch (error) {
            setError('Failed to log in. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className={`section ${styles.backImg}`}>
            <div className={`sectionContent ${styles.loginCard}`}>
                <Image src={'/bird.png'} alt="bird" width={70} height={70} className={styles.logo} priority/>
                <h1 className={styles.loginHeader}>Login</h1>
                {error && <div className={styles.errorMsg}>{error}</div>}
                {success && <div className={styles.successMsg}>{success}</div>}
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}>Username <span className={styles.required}>*</span></label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className={styles.inputField}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}>Password <span className={styles.required}>*</span></label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.btnSignIn}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
