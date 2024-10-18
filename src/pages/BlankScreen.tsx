import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { durationState, paradigmState } from "../recoil/atoms/ParadigmAtom";
import AUDIO from "../assets/ancient-spirit-echoes-om-chanting-234045.mp3";
import { durationStateSelector } from "../recoil/selectors/ParadigmSelectors";
import useSendMarker from "../hooks/useSendMarker";

const BlankScreen: React.FC = () => {
  const marker = useSendMarker();
  const setCurrentPage = useSetRecoilState(paradigmState);
  const duration = useRecoilValue(durationState);
  const durationArr = useRecoilValue(durationStateSelector);

  const [play, { stop }] = useSound(AUDIO);

  useEffect(() => {
    play();

    return () => stop();
  }, []);

  const handleComplete = async () => {
    stop();
    await marker("Blank End");
    setCurrentPage("Cartoon"); // navigate("/cartoon");
  };

  useEffect(() => {
    marker("Blank Start").then((val) => {
      console.log(val);
    });
  }, []);
  return (
    <div className="bg-black h-screen">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={["#004777", "#F7B801", "#954141", "#A30000"]}
        colorsTime={durationArr}
        size={1}
        onComplete={handleComplete}
      ></CountdownCircleTimer>

      <button
        onClick={() => play()}
        className="w-full px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-white"
      >
        Play
      </button>
    </div>
  );
};

export default BlankScreen;
