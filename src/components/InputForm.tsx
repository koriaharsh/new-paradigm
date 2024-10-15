import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cycleAtom, paradigmState } from "../recoil/atoms/ParadigmAtom";
// import { useNavigate } from "react-router-dom";

const Input: React.FC = () => {
  // const navigate = useNavigate();
  const [cycleCount, setCycleCount] = useRecoilState(cycleAtom);
  const setCurrentPage = useSetRecoilState(paradigmState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCycleCount(event.target.value);
  };

  const handleOnClick = () => {
    // navigate("/full-paradigm");
    setCurrentPage("Rest");
  };

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-between items-center">
        <label htmlFor="cycles">No. of cycles to run</label>
        <input
          id="cycles"
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChangeHandler}
          value={cycleCount}
        />
      </div>
      <div>
        <button
          onClick={handleOnClick}
          className="w-full px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-white"
        >
          Start{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
