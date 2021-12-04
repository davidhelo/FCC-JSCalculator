import { useState } from 'react/cjs/react.development';
import './App.css';
import './react-components/CalculatorButton.js';
import CalculatorButton from './react-components/CalculatorButton.js';

function App() {
  // user stories data for requirements id's and text to display
  let buttonsData = [
    { textToShow: "=", buttonId: "equals" },
    { textToShow: "/", buttonId: "divide" },
    { textToShow: "*", buttonId: "multiply" },
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
    // the calculator is fully functional. missing CSS to arrange components.
    // it receives the showText prop from button ("1", "2", "3", etc... "+", "-", "*", "/", "C") from the CalculatorButton component. 
    /* for now it print the string considering the restrictions:
        - no multiple ceros or any cero to the left.
        - No multiple dot decimals ('.')
        - No two operations symbols together.
          (CONSIDER THAT - (MINUS for negative numbers) CAN BE LEGAL ONE TIME, example: 2*-3 = -6, but not 2*--3 or 2-* or 2+-3, so can be 2*-3 or 4/-2)
    */
    let regex0to9 = /[0-9]/;
    let regexOperations = /[-+*\/]/;
    let lastCharacterInDisplay = CalculatorState.display[CalculatorState.display.length-1];
    // the if conditions can be written clearer.
    if (buttonClicked === "C") {
      setCalculatorState({ display: "0" }); // clear screen
    } else if (CalculatorState.display === "0" && regex0to9.test(buttonClicked)) {
        setCalculatorState({ display: buttonClicked }); // remove zeros from the left
      } else if (buttonClicked === '.' && !/\./.test(CalculatorState.display)) {
          setCalculatorState({ display: CalculatorState.display + buttonClicked }); // verify if there is a dot already in the screen, if not add it at the end
        } else if (buttonClicked === '=') {
            setCalculatorState({ display: (eval(CalculatorState.display)) }); // equals eval the string expresion to show the result on the screen
          } else if (buttonClicked === '-' && lastCharacterInDisplay !== '-' && lastCharacterInDisplay !== '+') { // verification for the negative number 
              setCalculatorState({ display: CalculatorState.display + buttonClicked }); 
            } else if (regex0to9.test(buttonClicked) || (regexOperations.test(buttonClicked) && !regexOperations.test(lastCharacterInDisplay))) { 
                setCalculatorState({ display: CalculatorState.display + buttonClicked }); // this add the character at the end verifying if the last character of the string is not an operator
              } else if (regexOperations.test(lastCharacterInDisplay)) {
                  let charsToRemove = regexOperations.test(CalculatorState.display[CalculatorState.display.length-2]) ? 2 : 1; // this verify if there are already two operator together like *- or /- to remove the second last character too in case a different operator is clicked.
                  setCalculatorState({ display: CalculatorState.display.slice(0, -1*charsToRemove) + buttonClicked });
                } 
}

  // generate JSX for all buttons in the calculator from buttonsData, which is our data bank to generate the components. 17 total
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
