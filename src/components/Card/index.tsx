import styles from "./styles.module.css";

interface DoorProps {
  text: string;
  type: boolean;
  onChange: () => void;
}

export default function Card(props: DoorProps) {
  return (
    <div
      onClick={props.onChange}
      className={`${styles.container} ${
        props.type ? styles.type1 : styles.type2
      } `}
    >
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
