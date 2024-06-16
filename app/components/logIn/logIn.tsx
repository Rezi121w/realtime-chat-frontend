import React, { useState } from 'react';
import styles from './logIn.module.css';
import Image from 'next/image';
import { LoginApi } from "@/app/Api/Auth.api";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = ({router}: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: any) => {
        event.preventDefault();

        const loginResponse = await LoginApi(username, password);
        if(!loginResponse.accessToken) {
            toast.error(loginResponse.message);
        } else {
            toast.success("Successfully Logined!");
            localStorage.setItem("user", loginResponse.accessToken);
            router.push("/chats");
        }
    };

    // Toast INFO //
    
    
    return (
        <>
        <ToastContainer 
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />

        <div className={`section ${styles.backImg}`}>
            <div className={`sectionContent ${styles.loginCard}`}>
                <Image src={'/bird.png'} alt="bird" width={70} height={70} className={styles.logo} priority/>
                <h1 className={styles.loginHeader}>Login</h1>
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
                    <button onClick={handleLogin} type="submit" className={styles.btnSignIn}>Sign In</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default LogIn;
