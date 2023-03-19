import { FaShip, FaPlane } from "react-icons/fa";
import styles from "./styles.module.css";
import { ChannelType } from "../../../App";

interface ILeftColumnProps {
  channel: ChannelType;
}

const LeftColumn = ({ channel }: ILeftColumnProps) => {
  const getIcon = () => {
    const icons = {
      air: <FaPlane size={50} color="#3898ec" className={styles.icon} />,
      ocean: <FaShip size={50} color="#3898ec" className={styles.icon} />,
    };

    return icons[channel];
  };

  const getAirDeliveryDays = () => {
    const firstNumber = Math.floor(Math.random() * 5) + 3;
    const secondNumber = Math.floor(Math.random() * 3) + 2;

    return `${firstNumber}-${firstNumber + secondNumber}`;
  };

  const getOceanDeliveryDays = () => {
    const firstNumber = Math.floor(Math.random() * 6) + 25;
    const secondNumber = Math.floor(Math.random() * 6) + 5;

    return `${firstNumber}-${firstNumber + secondNumber}`;
  };

  const currentDeliveryDays =
    channel === "air" ? getAirDeliveryDays() : getOceanDeliveryDays();

  const today = new Date();

  const getDeliveryDates = () => {
    const firstDate = new Date(today);
    const secondDate = new Date(today);

    firstDate.setDate(
      firstDate.getDate() + parseInt(currentDeliveryDays.split("-")[0])
    );
    secondDate.setDate(
      secondDate.getDate() + parseInt(currentDeliveryDays.split("-")[1])
    );

    const firstMonth = firstDate.toLocaleString("en-us", {
      month: "short",
    });
    const secondMonth = secondDate.toLocaleString("en-us", {
      month: "short",
    });

    const firstDay = firstDate.getDate();
    const secondDay = secondDate.getDate();

    return `${firstMonth} ${firstDay} - ${secondMonth} ${secondDay}`;
  };

  return (
    <div className={styles.leftColumn}>
      <div className={styles.leftHeader}>
        {getIcon()} Traditional {channel} freight
      </div>
      <div className={styles.leftBody}>
        <p className={styles.deliveryDays}>{currentDeliveryDays} days</p>
        <p className={styles.estimatedDelivery}>Estimated delivery</p>
        <p className={styles.deliveryDates}>{getDeliveryDates()}</p>
      </div>
    </div>
  );
};

export default LeftColumn;
