import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Door from "../../components/Door";
import Link from "next/link";

import DoorModule from "../../model/DoorModule";
import styles from "../../styles/pageGift.module.css";

export default function Gift() {
  const router = useRouter();
  const [arrayDoors, setArrayDoors] = useState<DoorModule[]>([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const gift = +router.query.gift;

    const isValidDoor = doors >= 3 && doors <= 100;
    const isValidGift = gift >= 1 && gift <= doors;

    if (isValidDoor && isValidGift) {
      setIsValid(false);
    } else {
      setIsValid(true);
      return;
    }

    let arrayDoors = [];
    for (let index = 1; index <= Number(doors); index++) {
      if (index === Number(gift)) {
        arrayDoors.push(new DoorModule(index, true));
      } else {
        arrayDoors.push(new DoorModule(index));
      }
    }
    console.log(doors);
    setArrayDoors(arrayDoors);

    return () => {};
  }, [router.query.doors, router.query.gift]);

  function handleOpen(door: DoorModule) {
    const newDood = arrayDoors.map((item) => {
      if (item.number === door.number) {
        return door;
      } else {
        return item;
      }
    });
    setArrayDoors(newDood);
  }

  if (isValid) {
    return (
      <>
        <div className={styles.container}>
          <h1>Jogo inválido 😓</h1>
        </div>
        <div className={styles.container}>
          <Link href="/">
            <button className={styles.button}>Reiniciar</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        {arrayDoors.map((item) => (
          <Door
            key={item.number}
            value={item}
            onChange={(newDoor) => handleOpen(newDoor)}
          />
        ))}
      </div>
      <div className={styles.container}>
        <Link href="/" passHref>
          <button className={styles.button}>Reiniciar</button>
        </Link>
      </div>
    </>
  );
}
