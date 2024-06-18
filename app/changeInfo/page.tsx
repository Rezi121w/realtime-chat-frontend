'use client'

import styles from './page.module.css';
import ChatMenu from "@/app/components/chatMenu/chatMenu";
import ChangeInfoComp from "@/app/components/changeInfo/changeInfo";


export default function ChangeInfo() {

    return (
        <>
            <div className={styles.chatsMain}>
                <ChatMenu/>
                <ChangeInfoComp />
            </div>
        </>
    );
}
