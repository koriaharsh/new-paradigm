import { useState } from "react";
import axios from "axios";

const useSendMarker = () => {
  const [mkr, setMkr] = useState<string>();
  const sendMarker = async (markerValue: string) => {
    try {
      const reqData = {
        marker: markerValue,
      };
      const response = await axios.post(
        "http://localhost:8000/marker",
        reqData
      );
      console.log(response.data);
      setMkr(markerValue);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return sendMarker;
};

export default useSendMarker;
