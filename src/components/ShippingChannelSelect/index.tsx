import InputContainer from "../InputContainer";
import Label from "../Label";
import { ChannelType } from "../../App";
import styles from "./styles.module.css";

const options = [
  { value: "1", label: "Ocean" },
  { value: "2", label: "Air" },
];

interface IShippingChannelSelectProps {
  channel: ChannelType;
  setChannel: (channel: ChannelType) => void;
}

const ShippingChannelSelect = ({
  channel,
  setChannel,
}: IShippingChannelSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const lowerCaseValue = value.toLowerCase();

    setChannel(lowerCaseValue as ChannelType);
  };

  return (
    <InputContainer>
      <Label htmlFor="shipping-channel" text="Shipping channel" />
      <select
        id="shipping-channel"
        className={styles.select}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};

export default ShippingChannelSelect;
