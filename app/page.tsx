'use client'

import styles from "./page.module.css";
import { RecoilRoot } from "recoil";
import LogIn from "@/app/components/logIn/logIn";


export default function Home() {
    return (
        <>
            <RecoilRoot>
                <LogIn/>
            </RecoilRoot>
        </>
    );
}
