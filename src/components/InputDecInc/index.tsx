import styles from "./styles.module.css";

interface InputDecIntProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function InputDecInc(props: InputDecIntProps) {
  const dec = () => props.onChange(props.value - 1);
  const inc = () => props.onChange(props.value + 1);
  return (
    <div className={styles.container}>
      <span className={styles.label}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.Groupbutton}>
        <button
          onClick={dec}
          style={{ marginRight: "5px" }}
          className={styles.button}
        >
          -
        </button>
        <button onClick={inc} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
}
