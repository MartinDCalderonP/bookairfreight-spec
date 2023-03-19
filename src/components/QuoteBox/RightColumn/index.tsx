import styles from "./styles.module.css";

interface IRightColumnProps {
  startingCountry: string;
  destinationCountry: string;
  quotePrice: string;
}

const RightColumn = ({
  startingCountry,
  destinationCountry,
  quotePrice,
}: IRightColumnProps) => {
  const formattedPrice = quotePrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className={styles.rightColumn}>
      <div className={styles.rightHeader}>
        {startingCountry + " -> " + destinationCountry}
      </div>
      <div className={styles.rightBody}>
        <p className={styles.price}>US$ {formattedPrice}</p>
      </div>
    </div>
  );
};

export default RightColumn;
