import styles from "./chatMenu.module.css";
import Image from "next/image";
import { useRecoilValueLoadable } from "recoil";
import { userInfoAtom } from "@/app/userInfo";
import ChatName from "@/app/components/chatName/chatName";
import FooterPanel from "@/app/components/footerPanel/footerPanel";
import {useState} from "react";

export default function ChatMenu() {
    const userInfoLoadable = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;
    const [menuOpen, setMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if(userInfo.name == "") {
        setLoaded(loaded + 1);
    }

    return (
        <>
        <button className={styles.burger} onClick={toggleMenu}>
            <div className={styles.burgerBar}></div>
            <div className={styles.burgerBar}></div>
            <div className={styles.burgerBar}></div>
        </button>
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <div className={styles.user}>
                <Image src={userInfo.profileImg || "/defaultIcon.png"} alt={"userIcon"} height={40} width={40}/>
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
    </>
    );
}
