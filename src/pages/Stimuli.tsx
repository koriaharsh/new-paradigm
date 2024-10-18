import React, { useEffect } from "react";
import GIF from "../assets/spiral-11368_256.gif";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { durationState, paradigmState } from "../recoil/atoms/ParadigmAtom";
import { durationStateSelector } from "../recoil/selectors/ParadigmSelectors";
import useSendMarker from "../hooks/useSendMarker";

const Stimuli: React.FC = () => {
  const marker = useSendMarker();
  const setCurrentPage = useSetRecoilState(paradigmState);
  const duration = useRecoilValue(durationState);
  const durationArr = useRecoilValue(durationStateSelector);

  const handleComplete = async () => {
    await marker("Stimuli End");
    setCurrentPage("Blank");
  };

  useEffect(() => {
    marker("Stimuli Start").then((val) => {
      console.log(val);
    });
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={["#004777", "#F7B801", "#954141", "#A30000"]}
        colorsTime={durationArr}
        size={1}
        onComplete={handleComplete}
      ></CountdownCircleTimer>
      <img src={GIF} width={500} />
    </div>
  );
};

export default Stimuli;
