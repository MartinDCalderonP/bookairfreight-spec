import { MouseEvent } from "react";
import styles from "./styles.module.css";

interface ICreateQuoteButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CreateQuoteButton = ({ onClick }: ICreateQuoteButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Create quote
    </button>
  );
};

export default CreateQuoteButton;
