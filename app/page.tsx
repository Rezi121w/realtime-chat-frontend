'use client'

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import LogIn from "@/app/components/logIn/logIn";


export default function Home() {
    const router = useRouter();
    return (
        <>
            <LogIn router={router}/>
        </>
    );
}
