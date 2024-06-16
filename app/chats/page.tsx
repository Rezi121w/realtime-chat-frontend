'use client'

import styles from './page.module.css';
import ChatMenu from "@/app/components/chatMenu/chatMenu";

import RealChat from '../components/realChat/realChat';

export default function Chats() {

    return (
        <>
            <div className={styles.chatsMain}>
                <ChatMenu/>

                <RealChat/>


            </div>
        </>
    );
}
