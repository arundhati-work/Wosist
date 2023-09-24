import './GeneratingPlan.css';
import Question from '../Question/Question';



function GeneratingPlan(props){
    return (
        <div className="container">
            <Question q="Generating Plan..."/> 
            <p className="details">Time Frame: {props.timeFrame}&emsp;|&emsp;Topic: {props.topic}&emsp;|&emsp;Subtopic: {props.subtopic}</p>
        </div>
    );
}

export default GeneratingPlan;