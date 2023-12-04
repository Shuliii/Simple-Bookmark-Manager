import styles from "./BlueButton.module.css";

const BlueButton = (props) => {
  return (
    <button type={props.type} style={props.style} className={styles.button}>
      {props.children}
    </button>
  );
};

export default BlueButton;
