import styles from "./styles.module.css";

export default function Gift(props) {
  return (
    <div className={styles.gift}>
      <div className={styles.header}></div>
      <div className={styles.body}></div>
      <div className={styles.ties1}></div>
      <div className={styles.ties2}></div>
    </div>
  );
}
