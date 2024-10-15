import React from "react";
import GIF from "../assets/spiral-11368_256.gif";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { paradigmState } from "../recoil/atoms/ParadigmAtom";

const Stimuli: React.FC = () => {
  // const navigate = useNavigate();
  const setCurrentPage = useSetRecoilState(paradigmState);

  const handleComplete = () => {
    setCurrentPage("Blank");
    // navigate("/blank");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[25, 15, 10, 0]}
        size={1}
        onComplete={handleComplete}
      ></CountdownCircleTimer>
      <img src={GIF} width={500} />
    </div>
  );
};

export default Stimuli;
