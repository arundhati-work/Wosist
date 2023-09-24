import './TimeFrame.css';
import Question from '../Question/Question';
import hoursData from '../data/hours.json';
import MajorBlock from '../Major-block/MajorBlock';


function TimeFrame({setSelectedTimeFrame}){

    return (
        <div className="container">
            <Question q="How much time do you have?"/>
            <div className="hours-container">
                {hoursData.hours.map((hour)=>{
                    return <MajorBlock key={hour.id} data={hour.label} onSelect={(value) => setSelectedTimeFrame(value)}/>
                })}
            </div> 
        </div>
    );
}

export default TimeFrame;