import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useSetRecoilState } from "recoil";
import { paradigmState } from "../recoil/atoms/ParadigmAtom";
import AUDIO from "../assets/ancient-spirit-echoes-om-chanting-234045.mp3";

const BlankScreen: React.FC = () => {
  // const navigate = useNavigate();
  const setCurrentPage = useSetRecoilState(paradigmState);

  const [play, { stop }] = useSound(AUDIO);

  useEffect(() => {
    play();

    return () => stop();
  }, []);

  const handleComplete = () => {
    stop();
    setCurrentPage("Cartoon"); // navigate("/cartoon");
  };
  return (
    <div className="bg-black h-screen">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[25, 15, 10, 0]}
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
