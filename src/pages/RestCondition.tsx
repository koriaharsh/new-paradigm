import React from "react";
// import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSetRecoilState } from "recoil";
import { cycleCountAtom, paradigmState } from "../recoil/atoms/ParadigmAtom";

const RestCondition: React.FC = () => {
  // const navigate = useNavigate();
  const setCount = useSetRecoilState(cycleCountAtom);
  const setCurrentPage = useSetRecoilState(paradigmState);

  const handleComplete = () => {
    setCount((prev) => prev + 1);
    setCurrentPage("Stimuli");
    // navigate("/stimuli");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[25, 15, 10, 0]}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => `${remainingTime} sec`}
      </CountdownCircleTimer>
    </div>
  );
};

export default RestCondition;
