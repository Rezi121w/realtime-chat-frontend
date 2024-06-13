'use client';

import Image from 'next/image';
import styles from './page.module.css';
import {useEffect, useState} from "react";
// Api //
import {getChat, postApiMessage} from '../Chat.Api';

export default function Chat() {

    const [messages, setMessages] = useState<any[]>([])
    const [messageAdd, setMessageAdd] = useState("");
    const [flag, setFlag] = useState(0);


    async function getAllMessages() {
        const allMessages = await getChat();
        setMessages(allMessages);
    }

    async function postMessage() {
        if(messageAdd.length >= 5){
            const data = {
                message: messageAdd,
                author: localStorage.getItem("user"),
                profile: localStorage.getItem("profile"),
            }
            await postApiMessage(data);
            setMessageAdd("");
            setFlag(flag + 1);
        } else {
            alert("Bups Dups!")
        }

    }

    useEffect(() => {getAllMessages()}, [flag])

    return (
        <div className={styles.container}>
            <div className={styles.messages}>
                {messages.map((msg) => (
                    <div key={msg.id} className={styles.message}>
                        <img src={msg.profileImg.includes("http") ? msg.profileImg : "/user.jpg"} alt={msg.user} width={40} height={40} />
                        <div className={styles.content}>
                            <strong>{msg.authorName}</strong>
                            <p>{msg.message}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input value={messageAdd} onChange={(e) => {
                    setMessageAdd(e.target.value);
                }} type="text" placeholder="Type a message..." />
                <button onClick={postMessage}>Send</button>
            </div>
        </div>
    );
}
