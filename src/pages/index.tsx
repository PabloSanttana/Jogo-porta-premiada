import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

import InputDecInc from "../components/InputDecInc";
import styles from "../styles/inicio.module.css";
import Card from "../components/Card";

export default function Home() {
  const router = useRouter();
  const [gift, setGift] = useState(0);
  const [doors, setDoors] = useState(0);

  function handleNewGame() {
    router.push(`/${doors}/${gift}`);
  }

  return (
    <div className="">
      <Head>
        <title>Jogor porta Premiada</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.item}>
            <Card
              text="Monty Hall"
              type={true}
              onChange={() => console.log()}
            />
            <InputDecInc
              value={gift}
              text="Porta premiada?"
              onChange={(e) => setGift(e)}
            />
          </div>
          <div className={styles.item}>
            <InputDecInc
              value={doors}
              text="Qtds portas?"
              onChange={(e) => setDoors(e)}
            />
            <Card
              text="Iniciar"
              type={false}
              onChange={() => handleNewGame()}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
