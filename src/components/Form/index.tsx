import { useState, ChangeEvent, MouseEvent } from "react";
import InputContainer from "../InputContainer";
import Label from "../Label";
import ShippingChannelSelect from "../ShippingChannelSelect";
import CreateQuoteButton from "../CreateQuoteButton";
import { ChannelType } from "../../App";
import styles from "./styles.module.css";

interface IFormProps {
  setData: (data: any) => void;
  setShowQuoteBox: (showQuoteBox: boolean) => void;
}

const Form = ({ setData, setShowQuoteBox }: IFormProps) => {
  const [startingCountry, setStartingCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [quotePrice, setQuotePrice] = useState("");
  const [channel, setChannel] = useState<ChannelType>("ocean");

  const handleStartingCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[a-zA-Z]+$/)) {
      setStartingCountry(e.target.value);
    }
    return;
  };

  const handleDestinationCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[a-zA-Z]+$/)) {
      setDestinationCountry(e.target.value);
    }
    return;
  };

  const handleQuotePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]+$/)) {
      setQuotePrice(e.target.value);
    }
    return;
  };

  const inputs = [
    {
      name: "Starting country",
      onChange: handleStartingCountryChange,
      type: "text",
      value: startingCountry,
    },
    {
      name: "Destination country",
      onChange: handleDestinationCountryChange,
      type: "text",
      value: destinationCountry,
    },
    {
      name: "Quote price",
      onChange: handleQuotePriceChange,
      type: "text",
      value: quotePrice,
    },
  ];

  const handleCreateQuoteButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      startingCountry === "" ||
      destinationCountry === "" ||
      quotePrice === ""
    ) {
      return;
    }

    setData({
      channel,
      destinationCountry,
      quotePrice,
      startingCountry,
    });

    setShowQuoteBox(true);
  };

  return (
    <form className={styles.form}>
      {inputs?.map((input) => (
        <InputContainer key={input.name}>
          <Label htmlFor={input.name} text={input.name} />
          <input
            id={input.name}
            onChange={input.onChange}
            type={input.type}
            value={input.value}
          />
        </InputContainer>
      ))}
      <ShippingChannelSelect channel={channel} setChannel={setChannel} />
      <CreateQuoteButton onClick={handleCreateQuoteButtonClick} />
    </form>
  );
};

export default Form;
