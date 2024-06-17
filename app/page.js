import Image from "next/image";
import styles from "./page.module.css";
import {Appliances} from "@/components/Appliances/Appliances";

async function getAppliances() {
  const getData = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/testing`, getData)
  return await res.json()
}
// z
export default async function Home() {
  const appliances = await getAppliances()
  console.log('appliances', appliances)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Appliances appliances={appliances}/>
      </div>
    </main>
  );
}
