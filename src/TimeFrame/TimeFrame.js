import React, {useState} from 'react';
import './TimeFrame.css';
import Question from '../Question/Question';
import hoursData from '../data/hours.json';
import MajorBlock from '../Major-block/MajorBlock';


function TimeFrame({selectedTimeFrame, setSelectedTimeFrame}){
    const [timeFrame, setTimeFrame] = useState(selectedTimeFrame);

    const handleSelect = (value) =>{
        setTimeFrame(value);
        setSelectedTimeFrame(value);
    }

    return (
        <div className="container">
            <Question q="How much time do you have?"/>
            <p className='selected-item'>{timeFrame}</p>
            <div className="hours-container">
                {hoursData.hours.map((hour)=>{
                    return <MajorBlock key={hour.id} data={hour.label} onSelect={(value) => handleSelect(value)}/>
                })}
            </div> 
        </div>
    );
}

export default TimeFrame;