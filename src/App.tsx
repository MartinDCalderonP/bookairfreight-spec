import { useState } from "react";
import Form from "./components/Form";
import QuoteBox from "./components/QuoteBox";

export type ChannelType = "air" | "ocean";

function App() {
  const [data, setData] = useState({
    channel: "ocean" as ChannelType,
    startingCountry: "",
    destinationCountry: "",
    quotePrice: "",
  });
  const [showQuoteBox, setShowQuoteBox] = useState(false);

  return (
    <main>
      <Form setData={setData} setShowQuoteBox={setShowQuoteBox} />
      {showQuoteBox && <QuoteBox data={data} />}
    </main>
  );
}

export default App;
