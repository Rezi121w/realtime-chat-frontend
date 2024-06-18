import styles from './changeInfo.module.css';
import Image from "next/image";
import React, { useState } from "react";
import {ChangePassApi, ChangeProfileApi} from "@/app/Api/Auth.api";
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRecoilValueLoadable} from "recoil";
import {userInfoAtom} from "@/app/userInfo";


export default function ChangeInfoComp() {
    const [profileImageLink, setProfileImageLink] = useState<string>('');
    const [lastPassword, setLastPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const userInfoLoadable = useRecoilValueLoadable(userInfoAtom);
    const userInfo = userInfoLoadable.contents;

    const handleProfileImageChange = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await ChangeProfileApi(profileImageLink);
        console.log(response);
        if (response.message) {
            for(let element of response.message) {
                toast.error(element);
            }
        } else {
            toast.success("Profile changed successfully");
            setProfileImageLink("");
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await ChangePassApi(lastPassword, newPassword);
        if(response.message) {
            if(response.statusCode == 400 || response.statusCode == 401) {
                for(let element of response.message) {
                    toast.error(element);
                }
            } else {
                toast.error(response.message);
            }
        } else {
            toast.success("Password changed successfully");
            setLastPassword("");
            setNewPassword("");
        }

    };

    return (
        <>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        <div className={styles.mainContainer}>
            <div className={styles.editheading}>
                <h1 className={styles.header}>Edit profile</h1>
                <Image src={userInfo.profileImg || '/defaultIcon.png'} alt={'icon'} width={120} height={120} />
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
        </>
    );
}
