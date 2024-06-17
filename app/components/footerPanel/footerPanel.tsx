import styles from "./footerPanel.module.css";
import Image from "next/image";


export default function FooterPanel() {


    return(
        <div className={styles.panelBorder}>
            <div className={styles.adminPanel}>
                <Image src={"/wb_sunny.svg"} alt={"sun"}  width={20} height={20} />
                <span className={styles.admin}>Admin Panel</span>
            </div>

            <div className={styles.changePanel}>
                <Image src={"/out.svg"} alt={"Vector"}  width={20} height={20} />
                <span className={styles.change}>Change Account</span>
            </div>

            <div className={styles.outPanel}>
                <Image src={"/power_settings_new.svg"} alt={"log out"}  width={20} height={20} />
                <span className={styles.out}>Log out</span>
            </div>

        </div>
    )
}