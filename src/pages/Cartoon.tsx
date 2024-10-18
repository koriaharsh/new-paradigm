import React, { useEffect } from "react";
import VIDEO from "../assets/chota_bheem.mp4";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  cycleAtom,
  cycleCountAtom,
  durationState,
  paradigmState,
} from "../recoil/atoms/ParadigmAtom";
import { durationStateSelector } from "../recoil/selectors/ParadigmSelectors";
import useSendMarker from "../hooks/useSendMarker";

const Cartoon: React.FC = () => {
  const navigate = useNavigate();
  const totalCycles = useRecoilValue(cycleAtom);
  const cycleCount = useRecoilValue(cycleCountAtom);
  const setCurrentPage = useSetRecoilState(paradigmState);
  const duration = useRecoilValue(durationState);
  const durationArr = useRecoilValue(durationStateSelector);
  const marker = useSendMarker();

  const handleComplete = async () => {
    await marker("Cartoon End");
    console.log("total: " + totalCycles);
    console.log("current: " + cycleCount);
    if (cycleCount === parseInt(totalCycles)) {
      setCurrentPage("Landing");
      navigate("/");
    } else {
      setCurrentPage("Rest");
    }
  };

  useEffect(() => {
    marker("Cartoon Start").then((val) => {
      console.log(val);
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center ">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={["#004777", "#F7B801", "#954141", "#A30000"]}
        colorsTime={durationArr}
        size={1}
        onComplete={handleComplete}
      ></CountdownCircleTimer>
      <video src={VIDEO} autoPlay={true} controls className="h-screen" />
    </div>
  );
};

export default Cartoon;
