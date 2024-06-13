'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { LoginPanel } from './components/loginPanel/loginPanel';
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
  return (
    <main className={styles.main}>
      <LoginPanel router={router}/>
    </main>
  );
}
