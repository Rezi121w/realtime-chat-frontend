import { useEffect, useRef, useState } from "react";
import ChatInput from "../chatInput/chatInput";
import styles from "./realChat.module.css";
import Image from "next/image";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getChatByIdApi } from "@/app/Api/Chat.api";
import { useRecoilValueLoadable } from "recoil";
import { userInfoAtom } from "@/app/userInfo";
import {changeMessageApi, deleteMessageApi} from "@/app/Api/Message.api";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function RealChat({ chatId }: any) {
    const guessedTimezone = dayjs.tz.guess();

    const [chatInfo, setChatInfo] = useState<any>();
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const userInfoLoadable = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;

    async function getChatInfo() {
        const response = await getChatByIdApi(chatId);
        setChatInfo(response);
    }

    async function longPolling() {
        const response = await getChatByIdApi(chatId);
        if (JSON.stringify(response) !== JSON.stringify(chatInfo)) {
            setChatInfo(response);
        }
    }

    async function deleteMessage(id: string) {
        const response = await deleteMessageApi(id);
        if(response.message) {

        }
        getChatInfo()
    }

    async function changeMessage(id: string) {
        const message = prompt("Enter new message:");
        if (!message) return;

        await changeMessageApi(id, message);
    }

    function getDayJSTime(dateString: string) {
        return dayjs.utc(dateString).tz(guessedTimezone).subtract(2, 'hours').format('MM-DD HH:mm');
    }

    useEffect(() => {
        getChatInfo();
        const pollingInterval = setInterval(longPolling, 5000);
        return () => clearInterval(pollingInterval);
    }, [chatId]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatInfo]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.chatsCont} ref={chatContainerRef}>
                {chatInfo && chatInfo.messages.map((message: any) => (
                    <div key={message.id} className={message.sender.id === userInfo.id ? styles.chatResponse : styles.chat}>
                        {message.sender.id === userInfo.id ? (
                            <>
                                <div className={styles.chatText}>
                                    <div className={styles.userTime}>
                                        <span className={styles.time}>{getDayJSTime(message.createdAt)}</span>
                                        <span className={styles.userName}>{message.sender.userName}</span>
                                    </div>
                                    <div className={styles.yourMessage}>
                                        <span className={styles.message}>
                                            {message.content}
                                        </span>
                                    </div>
                                    <div className={styles.editBtn}>
                                     <Image onClick={() => changeMessage(message.id)} src={"/pen.png"} alt={"editing"} width={30} height={30} />
                                    <Image onClick={() => {deleteMessage(message.id)}} src={"/remove.png"} alt={"delete"} width={30} height={30} />
                                    </div>
                                </div>
                                <Image src={message.sender.profileImg || "/defaultIcon.png"} alt={"icon"} width={30} height={30} />
                            </>
                        ) : (
                            <>
                                <Image src={message.sender.profileImg || "/defaultIcon.png"} alt={"icon"} width={30} height={30} />
                                <div className={styles.chatText}>
                                    <div className={styles.userTime}>
                                        <span className={styles.userName}>{message.sender.userName}</span>
                                        <span className={styles.time}>{getDayJSTime(message.createdAt)}</span>
                                    </div>
                                    <div className={styles.userMessage}>
                                        <span className={styles.message}>
                                            {message.content}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            {chatInfo && <ChatInput chatName={chatInfo.name} chatId={chatId} refresh={getChatInfo} />}
        </div>
    );
}
