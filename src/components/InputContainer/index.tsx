import { ReactNode } from "react";
import styles from "./styles.module.css";

interface IInputContainerProps {
  children: ReactNode;
}

const InputContainer = ({ children }: IInputContainerProps) => {
  return <div className={styles.inputContainer}>{children}</div>;
};

export default InputContainer;
