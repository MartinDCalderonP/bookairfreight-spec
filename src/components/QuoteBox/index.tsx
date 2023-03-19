import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import styles from "./styles.module.css";
import { ChannelType } from "../../App";

interface IQuoteBoxProps {
  data: {
    channel: ChannelType;
    startingCountry: string;
    destinationCountry: string;
    quotePrice: string;
  };
}

const QuoteBox = ({ data }: IQuoteBoxProps) => {
  const { channel, startingCountry, destinationCountry, quotePrice } = data;

  return (
    <div className={styles.container}>
      <LeftColumn channel={channel} />
      <RightColumn
        startingCountry={startingCountry}
        destinationCountry={destinationCountry}
        quotePrice={quotePrice}
      />
    </div>
  );
};

export default QuoteBox;
