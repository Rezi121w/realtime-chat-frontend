import styles from "./chatInput.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { createMessageApi } from "@/app/Api/Message.api";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatInput({ chatName, chatId, refresh }: any) {
    const [input, setInput] = useState("");

    async function createMessage() {
        if (input.trim() === "") return;
        const response = await createMessageApi(chatId, input);
        if (response.message) {
            for (let message of response.message) {
                toast.error(message);
            }
        }
        setInput("");
        refresh();
    }

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
            <div className={styles.input}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type={"text"}
                    placeholder={`Write To Chat: #${chatName}`}
                    className={styles.inputInfo}
                />
                <Image
                    onClick={() => createMessage()}
                    src={"/button.svg"}
                    alt={"button"}
                    width={60}
                    height={60}
                    className={styles.inputImg}
                />
            </div>
        </>
    );
}
