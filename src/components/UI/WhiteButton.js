import styles from "./WhiteButton.module.css";

const WhiteButton = (props) => {
  return (
    <button type={props.type} style={props.style} className={styles.button}>
      {props.children}
    </button>
  );
};

export default WhiteButton;
