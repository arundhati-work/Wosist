// import React, {useState} from 'react';
import './MajorBlock.css';


function MajorBlock({data, onSelect}){

    return (
        <button className="major-block" onClick={() => {onSelect(data)}}>
            {data}
        </button>
    )
}

export default MajorBlock;