'use client'

import styles from './page.module.css';
import ChatMenu from "@/app/components/chatMenu/chatMenu";


export default function Chats() {

    return (
        <>
            <div className={styles.chatsMain}>
                <ChatMenu/>
            </div>
        </>
    );
}
