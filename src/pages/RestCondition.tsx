import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  cycleCountAtom,
  durationState,
  paradigmState,
} from "../recoil/atoms/ParadigmAtom";
import { durationStateSelector } from "../recoil/selectors/ParadigmSelectors";
import useSendMarker from "../hooks/useSendMarker";

const RestCondition: React.FC = () => {
  // const navigate = useNavigate();
  const setCount = useSetRecoilState(cycleCountAtom);
  const setCurrentPage = useSetRecoilState(paradigmState);
  const duration = useRecoilValue(durationState);
  const durationArr = useRecoilValue(durationStateSelector);
  const marker = useSendMarker();

  const handleComplete = async () => {
    await marker("Rest End");
    setCount((prev) => prev + 1);
    setCurrentPage("Stimuli");
    // navigate("/stimuli");
  };

  useEffect(() => {
    marker("Rest Start").then((val) => {
      console.log(val);
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={["#004777", "#F7B801", "#954141", "#A30000"]}
        colorsTime={durationArr}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => `${remainingTime} sec`}
      </CountdownCircleTimer>
    </div>
  );
};

export default RestCondition;
