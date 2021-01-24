import React from 'react'

const CalculatorTitle = (props) => {
    console.log(props);
    return(
        <div className = "calculator-title">
            <h1>{props.title}</h1>
        </div>
    )

}

export default CalculatorTitle