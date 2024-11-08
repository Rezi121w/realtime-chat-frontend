import styles from "./chatName.module.css";
import Image from "next/image";
import {getChatsApi} from "@/app/Api/Chat.api";
import {useEffect, useState} from "react";
import Link from "next/link";

interface chatProps {
    id: number;
    name: string;
}

export default function ChatName() {
    const [chatArray, setChatArray] = useState<chatProps[]>([]);

    async function getChats() {
        const allChats = await getChatsApi();
        setChatArray(allChats);
    }

    useEffect(() => {getChats();}, [])
    return(
        <div className={styles.chatCards}>
            {chatArray.length > 0 && chatArray.map((chat) => (
                <div key={chat.id} className={styles.chatCard}>
                    <Image src={"/Vector.svg"} alt={"Message"} height={20} width={20}/>
                    <Link href={`/chats/${chat.id}`}>
                        <span className={styles.chatName}>{chat.name}</span>
                    </Link>
                </div>
            ))

            }
        </div>
    )
}

