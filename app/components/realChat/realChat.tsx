import { useEffect, useState } from "react";
import ChatInput from "../chatInput/chatInput";
import styles from "./realChat.module.css";
import Image from "next/image";
import { getChatByIdApi } from "@/app/Api/Chat.api";
import dayjs from 'dayjs';
import { useRecoilValueLoadable } from "recoil";
import { userInfoAtom } from "@/app/userInfo";


export default function realChat({chatId}: any) {
    const [chatInfo, setChatInfo] = useState<any>();

    const userInfoLoadable: any = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;

    async function getChatInfo() {
        const response = await getChatByIdApi(chatId, localStorage.getItem("user") || "");
        setChatInfo(response);
    }

    async function longPolling() {
        const response = await getChatByIdApi(chatId, localStorage.getItem("user") || "");

        if (JSON.stringify(response) !== JSON.stringify(chatInfo)) {
                setChatInfo(response);
        }
    }

    function getDayJSTime(dateString: string) {
        const dateObject = dayjs(dateString);
        return dateObject.format('MM-DD HH:mm');
    }

    useEffect(() => {
        getChatInfo();
        const pollingInterval = setInterval(longPolling, 5000);

        return () => clearInterval(pollingInterval);
    }, [chatId]);

    return(
        <div className={styles.mainContainer}>
            <div className={styles.chatsCont}>

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
            {chatInfo && <ChatInput chatName={chatInfo.name} chatId={chatId} refresh={getChatInfo}/>}
        </div>
    )

}