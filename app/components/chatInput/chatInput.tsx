import styles from "./chatInput.module.css";
import Image from "next/image";


export default function chatInput() {


    return(
    <div className={styles.input}>
        <input type={"text"} placeholder={"Write To Chat: #CHATNAME"} className={styles.inputInfo} />
        <Image src={"/button.svg"} alt={"button"} width={60} height={60} className={styles.inputImg}/>
    </div>
    )}