import { useEffect } from 'react';
import './CalculatorButton.css'

function CalculatorButton(props) {

    function handleClick() {
        props.clickOnButton(props.idButton);
    }

    return (
        <div 
            className="button" 
            id={props.idButton}
            onClick={handleClick} >
            {props.showText}
        </div>
    );
}

export default CalculatorButton;