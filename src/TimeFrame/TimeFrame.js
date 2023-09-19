import './TimeFrame.css';
import Question from '../Question/Question';
import hoursData from '../data/hours.json';
import MajorBlock from '../Major-block/MajorBlock';


function TimeFrame(){
    return (
        <div className="container">
            <Question q="How much time do you have?"/>
            <div className="hours-container">
                {hoursData.hours.map((hour)=>{
                    return <MajorBlock hours={hour.label}/>
                })}
            </div> 
        </div>
    );
}

export default TimeFrame;