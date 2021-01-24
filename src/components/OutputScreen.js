import React from 'react';
import OutputScreenRow from '../components/OutputScreenRow';

const OutputScreen = (props) => {
    //console.log(props);
    return (
        <div>
            <OutputScreenRow qaValue = {props.question} />
            <OutputScreenRow qaValue = {props.answer} />
        </div>
    )
}

export default OutputScreen;
