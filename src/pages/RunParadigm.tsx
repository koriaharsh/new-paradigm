import React from "react";
import { useRecoilValue } from "recoil";
import { paradigmState } from "../recoil/atoms/ParadigmAtom";
import RestCondition from "./RestCondition";
import Stimuli from "./Stimuli";
import BlankScreen from "./BlankScreen";
import Cartoon from "./Cartoon";
import Landing from "./Landing";

const RunParadigm: React.FC = () => {
  const currentPage = useRecoilValue(paradigmState);

  if (currentPage === "Landing") {
    return <Landing />;
  } else if (currentPage === "Rest") {
    return <RestCondition />;
  } else if (currentPage === "Stimuli") {
    return <Stimuli />;
  } else if (currentPage === "Blank") {
    return <BlankScreen />;
  } else if (currentPage === "Cartoon") {
    return <Cartoon />;
  }
};

export default RunParadigm;
