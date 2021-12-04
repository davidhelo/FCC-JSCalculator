import { useState } from 'react/cjs/react.development';
import './App.css';
import './react-components/CalculatorButton.js';
import CalculatorButton from './react-components/CalculatorButton.js';

function App() {
  // user stories data for requirements id's and text to display
  let buttonsData = [
    { textToShow: "=", buttonId: "equals" },
    { textToShow: "/", buttonId: "divide" },
    { textToShow: "X", buttonId: "multiply" },
    { textToShow: "-", buttonId: "substract" },
    { textToShow: "+", buttonId: "add" },
    { textToShow: "C", buttonId: "clear" },
    { textToShow: ".", buttonId: "decimal" },
    { textToShow: "0", buttonId: "zero" },
    { textToShow: "1", buttonId: "one" },
    { textToShow: "2", buttonId: "two" },
    { textToShow: "3", buttonId: "three" },
    { textToShow: "4", buttonId: "four" },
    { textToShow: "5", buttonId: "five" },
    { textToShow: "6", buttonId: "six" },
    { textToShow: "7", buttonId: "seven" },
    { textToShow: "8", buttonId: "eight" },
    { textToShow: "9", buttonId: "nine" }
  ];

  // State for the calculator 
  let [CalculatorState, setCalculatorState] = useState(
    {
      display: "0"
    }
  );

  function handleClickButton(buttonClicked) {
    // ************************************************** HANDLE THE CLICK continue
    // it receives the idButton from the CalculatorButton component. verify if its more convenient to receive the text of the number instead ("1" instead of "one").
    // for now it only prints the id in th edisplay
    setCalculatorState({display: buttonClicked});
  }

  // generate JSX for all buttons from buttonsData. 17 total
  let renderButtons = buttonsData.map(item => ( <CalculatorButton showText={item.textToShow} idButton={item.buttonId} clickOnButton={handleClickButton} /> ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonsContainer">
          <div id="display">
            {CalculatorState.display}
          </div>
          {renderButtons}
        </div>
      </header>
    </div>
  );
}

export default App;
