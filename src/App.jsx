import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-neutral-50 font-bold">Calculator</h1>
        <div className="mt-10 w-50">
          <Calculator />
        </div>
      </div>
    </>
  );
}

function Calculator() {
  return (
    <>
      <h2 className="text-neutral-50 rounded-md outline-1 text-right text-4xl p-2">
        4
      </h2>
      <div className="grid grid-cols-2 gap-1 mt-2 mb-0.5">
        <CalculatorButton value="C" />
        <CalculatorButton value="DEL" />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value="7" />
        <CalculatorButton value="8" />
        <CalculatorButton value="9" />
        <CalculatorButton value="x" />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value="4" />
        <CalculatorButton value="5" />
        <CalculatorButton value="6" />
        <CalculatorButton value="÷" />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value="1" />
        <CalculatorButton value="2" />
        <CalculatorButton value="3" />
        <CalculatorButton value="+" />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value="." />
        <CalculatorButton value="0" />
        <CalculatorButton value="=" />
        <CalculatorButton value="−" />
      </div>
    </>
  );
}

function CalculatorButton({ value }) {
  const buttonStyles = [
    'string': 
  ]

  const buttonStyle = buttonStyles[typeof value]
  return (
    <button className={buttonStyle + "bg-neutral-200 text-neutral-900 rounded-md h-10 cursor-pointer"}>
      {value}
    </button>
  );
}

export default App;
