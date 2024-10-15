import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RestCondition from "./pages/RestCondition";
import Stimuli from "./pages/Stimuli";
import BlankScreen from "./pages/BlankScreen";
import Cartoon from "./pages/Cartoon";
import RunParadigm from "./pages/RunParadigm";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/rest" element={<RestCondition />} />
          <Route path="/stimuli" element={<Stimuli />} />
          <Route path="/blank" element={<BlankScreen />} />
          <Route path="/cartoon" element={<Cartoon />} />
          <Route path="/" element={<RunParadigm />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
