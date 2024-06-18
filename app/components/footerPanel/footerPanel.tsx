import styles from "./footerPanel.module.css";
import Image from "next/image";
import {useRecoilValueLoadable} from "recoil";
import {userInfoAtom} from "@/app/userInfo";
import Link from "next/link";
import {useState} from "react";


export default function FooterPanel() {
    const userInfoLoadable = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;
    const [activeComponent, setActiveComponent] = useState('chat'); // Default to showing the chat


    const handleChangeInfoClick = () => {
        setActiveComponent('changeInfo');
    };

    return(
        <div className={styles.panelBorder}>
            {userInfo.role == "admin" ? (
                <div className={styles.adminPanel}>
                    <Image src={"/wb_sunny.svg"} alt={"sun"} width={20} height={20}/>
                    <span className={styles.admin}>Admin Panel</span>
                </div>
            ) : ""}

            <div className={styles.changePanel}>
                <Image src={"/out.svg"} alt={"Vector"} width={20} height={20}/>
               <Link href={'./changeInfo'}>   <span className={styles.change}  onClick={handleChangeInfoClick}>Change Account </span></Link>

        </div>

    <div className={styles.outPanel}>
                <Image src={"/power_settings_new.svg"} alt={"log out"}  width={20} height={20} />
                <span className={styles.out}>Log out</span>
            </div>

        </div>
    )
}