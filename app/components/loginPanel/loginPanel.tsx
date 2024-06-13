'use client'
import Image from "next/image";
import styles from "./loginPanel.module.css";
import {useState} from "react";

interface Props {
    router: any;
}

export function LoginPanel({router}: Props) {
    const [input, setInput] = useState<string>();
    const [profileImg, setProfileImg] = useState<string>();

    function saveInput(e: any) {
        setInput(e.target.value);
    }

    function userNameSave() {
        if(input != undefined && input != ""){
            localStorage.setItem("user", input);
            localStorage.setItem("profile", profileImg || "null");
            router.push('/chat');
        } else {
            alert("Please Write Your UserName!");
        }
    }

    return (
        <main className={styles.container}>
            <h2 className={styles.h2}>Login</h2>
            <div>
                <label className={styles.userNameLabel} htmlFor="username">Username:</label>
                <input
                    onChange={saveInput}
                    value={input}
                    type="text"
                    id="username"
                    required
                />
                <br />
                <label className={styles.userNameLabel} htmlFor="profileImg">ProfileImg:</label>
                <input
                    onChange={(e) => {
                        setProfileImg(e.target.value)
                    }}
                    value={profileImg}
                    type="text"
                    id="profileImg"
                />
                <button onClick={userNameSave} className={styles.Button}>Enter Chat</button>
            </div>

        </main>
    );
}
