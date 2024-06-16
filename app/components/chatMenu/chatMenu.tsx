import styles from "./chatMenu.module.css";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "@/app/userInfo";
import ChatName from "@/app/components/chatName/chatName";
import FooterPanel from "@/app/components/footerPanel/footerPanel";

export default function ChatMenu() {
    const userInfo = useRecoilValue(userInfoAtom);

    return (
        <div className={styles.nav}>
            <div className={styles.user}>
                <Image src={userInfo.profileImage || "/defaultIcon.png"} alt={"userIcon"} height={40} width={40} />
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{userInfo.userName}</span>
                    <span className={styles.userRole}>{userInfo.role}</span>
                </div>
            </div>

            <div className={styles.chatsPlace}>
            <ChatName/>
            <FooterPanel/>

            </div>
        </div>
    );
}
