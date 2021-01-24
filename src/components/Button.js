import React from 'react'

const button = (props) =>  {
    return (
        <div>
            <input type="button" onClick={props.clickButton} value= {props.label} />
        </div>
    )
}

export default button
