import styles from "./adminChats.module.css";
import Image from "next/image";
import {clearChatApi, deleteChatApi, getChatsApi} from "@/app/Api/Chat.api";
import React, {useEffect, useState} from "react";
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

interface chatProps {
    id: number;
    name: string;
}

export default function AdminChats({refresh} :any) {
    const [chatArray, setChatArray] = useState<chatProps[]>([]);

    async function getChats() {
        const allChats = await getChatsApi();
        setChatArray(allChats);
    }

    useEffect(() => {getChats();}, [])
    // Admin Functions //
    async function onChatClear(id: string) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Clear This Chat!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await clearChatApi(id);

                if (response.message) {
                    toast.error(response.message);
                } else {
                    toast.success("Successfully Cleared Chat!");
                }
            }
        })

    }

    async function onChatDelete(id: string) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete This Chat!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteChatApi(id);

                if (response.message) {
                    toast.error(response.message);
                } else {
                    toast.success("Successfully Deleted Chat!");
                    window.location.reload();
                }
            }
        })

    }

    return(
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
        <div className={styles.mainContainer} >
            <div className={styles.chatCards}>
                {chatArray.length > 0 && chatArray.map((chat) => (
                    <div key={chat.id} className={styles.chatCard}>
                        <div className={styles.chatCard_1}>
                            <Image src={"/Vector.svg"} alt={"Message"} height={20} width={20}/>
                            <span className={styles.chatName}>{chat.name}</span>
                        </div>
                        <div className={styles.chatCard_2}>
                            <Image src={"/pen.png"} alt={"editChat"} height={20} width={20}/>
                            <Image onClick={() => {onChatClear(chat.id.toString())}} src={"/clear-msg.png"} alt={"clearChat"} height={20} width={20}/>
                            <Image onClick={() => {onChatDelete(chat.id.toString())}} src={"/remove.png"} alt={"removeChat"} height={20} width={20}/>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        </>
    )
}

