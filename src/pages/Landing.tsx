import React from "react";
import InputForm from "../components/InputForm";

const Landing: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center bg-slate-200"
      style={{ height: "100vh" }}
    >
      <div className="bg-white rounded-xl shadow-lg p-5">
        <h1 className="text-3xl font-bold text-gray-800">
          Data Collection Paradigm
        </h1>
        <InputForm />
      </div>
    </div>
  );
};

export default Landing;
