import styles from './changeInfo.module.css';
import Image from "next/image";
import React, { useState } from "react";
import {ChangePassApi, ChangeProfileApi} from "@/app/Api/Auth.api";


export default function ChangeInfoComp() {
    const [profileImageLink, setProfileImageLink] = useState<string>('');
    const [lastPassword, setLastPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const accessToken = localStorage.getItem("user") || "";

    const handleProfileImageChange = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await ChangeProfileApi(accessToken, profileImageLink);
        if (response.success) {
            // Handle success (e.g., show a success message, update UI)
            console.log("Profile image updated successfully");
        } else {
            // Handle error (e.g., show an error message)
            console.error("Failed to update profile image");
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await ChangePassApi(accessToken, lastPassword, newPassword);
        if (response.success) {
            console.log("Password updated successfully");
        } else {
            console.error("Failed to update password");
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.editheading}>
                <h1 className={styles.header}>Edit profile</h1>
                <Image src={'/defaultIcon.png'} alt={'icon'} width={120} height={120} />
            </div>

            <form className={styles.imgLink} onSubmit={handleProfileImageChange}>
                <label className={styles.inputLabel}>PROFILE IMG LINK:</label>
                <div className={styles.forms}>
                    <input
                        className={styles.imgInput}
                        type="text"
                        placeholder="ENTER YOUR NEW PROFILE_IMAGE LINK"
                        value={profileImageLink}
                        onChange={(e) => setProfileImageLink(e.target.value)}
                    />
                    <button type="submit" className={styles.saveBtn}>Save</button>
                </div>
            </form>

            <form className={styles.passLink} onSubmit={handleChangePassword}>
                <div className={styles.gapped}>
                    <label className={styles.inputLabel}>LAST PASSWORD:</label>
                    <input
                        className={styles.imgInput}
                        type="password"
                        placeholder="ENTER YOUR LAST PASSWORD"
                        value={lastPassword}
                        onChange={(e) => setLastPassword(e.target.value)}
                    />
                </div>

                <div className={styles.gapped}>
                    <label className={styles.inputLabel}>NEW PASSWORD:</label>
                    <input
                        className={styles.imgInput}
                        type="password"
                        placeholder="ENTER YOUR NEW PASSWORD"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className={styles.btnCont}>
                    <button type="button" className={styles.cancelBtn}>Cancel</button>
                    <button type="submit" className={styles.saveBtn}>Save</button>
                </div>
            </form>
        </div>
    );
}
