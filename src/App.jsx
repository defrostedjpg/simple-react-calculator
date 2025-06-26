import { useState } from "react";
import { Decimal } from "decimal.js";
import "./App.css";

function App() {

  return (
    <>
      <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-neutral-50 font-bold">Calculator</h1>
        <div className="mt-10 w-80">
          <Calculator />
        </div>
      </div>
    </>
  );
}

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');


  function handleInput( value ) {
    const operationCharacters = [".", "x", "−", "÷", "+"];
    const specialCharacters = ["=", "C", "DEL"];
    value = value.toString();
    const lastCharacter = displayValue.slice(-1);

    switch (value) {
      case "C":
        setDisplayValue("0");
        break;

      case "DEL":
        if (displayValue.includes('Error')) {
          setDisplayValue('')
          break;
        }

        setDisplayValue(displayValue.slice(0, -1));
        break;

      case "=": {
        if (displayValue === undefined || isNaN(displayValue.slice(-1))) {
          setDisplayValue("Syntax Error");
        } else {
          const calculation = displayValue
            .replace(/x/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");

          const result = new Decimal(eval(calculation).toFixed(10))
          setDisplayValue(() => result.toString());
        }
      }
    }

    if (
      operationCharacters.includes(lastCharacter) && operationCharacters.includes(value)
    ) return;


    if (specialCharacters.includes(value)) return;
  
    if (value !== '.' && displayValue === '0' || displayValue.includes('Error')) {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
    return;
  }

  return (
    <>
      <div className="text-neutral-50 rounded-md outline-1 text-right text-4xl p-2 h-16">
        {displayValue}
      </div>
      <div className="grid grid-cols-[1.5fr_1.5fr_1fr] gap-1 mt-2 mb-0.5">
        <CalculatorButton value="C" onClick={handleInput} />
        <CalculatorButton value="DEL" onClick={handleInput} />
        <CalculatorButton value="x" onClick={handleInput} />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value={7} onClick={handleInput} />
        <CalculatorButton value={8} onClick={handleInput} />
        <CalculatorButton value={9} onClick={handleInput} />
        <CalculatorButton value="÷" onClick={handleInput} />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value={4} onClick={handleInput} />
        <CalculatorButton value={5} onClick={handleInput} />
        <CalculatorButton value={6} onClick={handleInput} />
        <CalculatorButton value="+" onClick={handleInput} />
      </div>
      <div className="grid grid-cols-4 gap-1 mt-1 mb-0.5">
        <CalculatorButton value={1} onClick={handleInput} />
        <CalculatorButton value={2} onClick={handleInput} />
        <CalculatorButton value={3} onClick={handleInput} />
        <CalculatorButton value="−" onClick={handleInput} />
      </div>
      <div className="grid grid-cols-[1fr_1fr_2.05fr] gap-1 mt-1 mb-0.5">
        <CalculatorButton value="." onClick={handleInput} />
        <CalculatorButton value={0} onClick={handleInput} />
        <CalculatorButton value="=" onClick={handleInput} />
      </div>
    </>
  );
}

function CalculatorButton({ value, onClick }) {
  const baseStyles = ' bg-emerald-200 text-neutral-900 rounded-md h-11 cursor-pointer ';
  const buttonStyles = {
    string: "bg-red-200",
    number: "bg-sky-200",
    undefined: "bg-emerald-200",
  };

  if (["x", "÷", "−", '+'].includes(value)) {
    return(
      <button onClick={() => onClick(value)} className={buttonStyles['operation'] + baseStyles}>
        {value}
      </button>
    )
  } else if (value === '.') {
    return (
      <button onClick={() => onClick(value)} className={buttonStyles["number"] + baseStyles}>
        {value}
      </button>
    );
  }

  const buttonStyle = buttonStyles[typeof value];
  return (
    <button onClick={() => onClick(value)} className={buttonStyle + baseStyles}>
      {value}
    </button>
  );
}

export default App;
