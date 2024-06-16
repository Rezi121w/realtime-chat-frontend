import ChatInput from "../chatInput/chatInput";
import styles from "./realChat.module.css";
import Image from "next/image";

export default function realChat() {


    return(
        <div className={styles.mainContainer}>
            <div className={styles.chatsCont}>
                <div className={styles.chat}>
                    <Image src={"/defaultIcon.png"} alt={"icon"} width={30} height={30}/>
                    <div className={styles.chatText}>
                        <div className={styles.userTime}>
                            <span className={styles.userName}>user name</span>
                            <span className={styles.time}>10:00</span>
                        </div>
                        <div className={styles.userMessage}>
                        <span className={styles.message}>
                            Hello Word!
                        </span>
                        </div>
                    </div>

                </div>


                <div className={styles.chatResponse}>
                    <div className={styles.chatText}>
                        <div className={styles.userTime}>
                            <span className={styles.time}>10:00</span>
                            <span className={styles.userName}>user name</span>

                        </div>

                        <div className={styles.yourMessage}>
                        <span className={styles.message}>
                            Hello Word!
                        </span>
                        </div>
                    </div>
                    <Image src={"/defaultIcon.png"} alt={"icon"} width={30} height={30}/>
                </div>


            </div>

            <ChatInput />
        </div>
    )

}