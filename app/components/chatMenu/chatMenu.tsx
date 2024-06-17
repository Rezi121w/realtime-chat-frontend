import styles from "./chatMenu.module.css";
import Image from "next/image";
import { useRecoilValueLoadable } from "recoil";
import { userInfoAtom } from "@/app/userInfo";
import ChatName from "@/app/components/chatName/chatName";
import FooterPanel from "@/app/components/footerPanel/footerPanel";

export default function ChatMenu() {
    const userInfoLoadable = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;

    return (
        <div className={styles.nav}>
            <div className={styles.user}>
                <Image src={userInfo.profileImage || "/defaultIcon.png"} alt={"userIcon"} height={40} width={40} />
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{userInfo.userName || "null"}</span>
                    <span className={styles.userRole}>{userInfo.role || "null"}</span>
                </div>
            </div>

            <div className={styles.chatsPlace}>
            <ChatName/>
            <FooterPanel/>

            </div>
        </div>
    );
}
