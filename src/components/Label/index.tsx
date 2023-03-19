import styles from "./styles.module.css";

interface ILabelProps {
  htmlFor: string;
  text: string;
}

const Label = ({ htmlFor, text }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
};

export default Label;
