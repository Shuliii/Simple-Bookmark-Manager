import styles from "./RedButton.module.css";

const RedButton = (props) => {
  return (
    <button type={props.type} style={props.style} className={styles.button}>
      {props.children}
    </button>
  );
};

export default RedButton;
