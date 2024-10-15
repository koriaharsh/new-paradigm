import React from "react";
import VIDEO from "../assets/chota_bheem.mp4";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  cycleAtom,
  cycleCountAtom,
  paradigmState,
} from "../recoil/atoms/ParadigmAtom";

const Cartoon: React.FC = () => {
  const navigate = useNavigate();
  const totalCycles = useRecoilValue(cycleAtom);
  const cycleCount = useRecoilValue(cycleCountAtom);
  const setCurrentPage = useSetRecoilState(paradigmState);

  const handleComplete = () => {
    console.log("total: " + totalCycles);
    console.log("current: " + cycleCount);
    if (cycleCount === parseInt(totalCycles)) {
      setCurrentPage("Landing");
      navigate("/");
    } else {
      // navigate("/rest");
      setCurrentPage("Rest");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[25, 15, 10, 0]}
        size={1}
        onComplete={handleComplete}
      ></CountdownCircleTimer>
      <video src={VIDEO} autoPlay={true} controls className="h-screen" />
    </div>
  );
};

export default Cartoon;
