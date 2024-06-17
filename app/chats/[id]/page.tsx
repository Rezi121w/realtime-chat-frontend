'use client'

import styles from './page.module.css';
import ChatMenu from "@/app/components/chatMenu/chatMenu";
import RealChat from '../../components/realChat/realChat';
import ChangeInfo from "@/app/components/changeInfo/changeInfo";


interface IdProps {
    params: {
        id: string;
    }
}


export default function Chat({ params }: IdProps) {

    return (
        <>
            <div className={styles.chatsMain}>
                <ChatMenu />
                <RealChat chatId={params.id}/>
                {/*<ChangeInfo />*/}
            </div>
        </>
    );
}
