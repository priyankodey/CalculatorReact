import React from 'react'

const OutputScreenRow = (props) => {
    return (
        <div className="screen-view">
            <input type="text" readOnly value= {props.qaValue} />
        </div>
    )
}

export default OutputScreenRow;
