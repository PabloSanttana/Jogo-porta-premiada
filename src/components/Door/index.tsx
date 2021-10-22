import styles from "./styles.module.css";

import DoorModule from "../../model/DoorModule";
import Gift from "../Gift/index";

interface DoorProps {
  value: DoorModule;
  onChange: (newDoor: DoorModule) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;

  function handleOpen() {
    props.onChange(door.openDoor());
  }

  function handleseleteced(e) {
    // e.stopPropagation();
    props.onChange(door.toggleSelected());
  }

  const seleteced = door.selected && !door.open ? styles.doorSelected : "";
  const open = door.open ? styles.open : "";
  const gift = door.gift ? true : false;
  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${seleteced}`}>
        <div onClick={handleseleteced} className={`${styles.door} ${open}`}>
          <div className={styles.number}>{door.number}</div>
          {gift && (
            <div className={styles.showGift}>
              <Gift />
            </div>
          )}
        </div>
        {!open && (
          <div className={styles.doorHandle} onClick={handleOpen}></div>
        )}
      </div>

      <div className={styles.footerDoor}></div>
    </div>
  );
}
