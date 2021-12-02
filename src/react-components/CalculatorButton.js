

function CalculatorButton(props) {

    return (
        <div className="button" id={props.idButton}>
            {props.showText}
        </div>
    );
}

export default CalculatorButton;