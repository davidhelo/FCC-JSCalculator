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

  // generate JSX for all buttons. 17 total
  let renderButtons = buttonsData.map(item => ( <CalculatorButton showText={item.textToShow} idButton={item.buttonId} /> ));

  return (
    <div className="App">
      <header className="App-header">
      {renderButtons}
      </header>
    </div>
  );
}

export default App;
