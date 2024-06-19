'use client'

import styles from './page.module.css';
import ChatMenu from "@/app/components/chatMenu/chatMenu";
import AdminChats from "@/app/components/adminChats/adminChats";
import {useState} from "react";


export default function AdminPanel() {

    return (
        <>
            <div className={styles.chatsMain}>
                <ChatMenu/>
                <AdminChats />
            </div>
        </>
    );
}
