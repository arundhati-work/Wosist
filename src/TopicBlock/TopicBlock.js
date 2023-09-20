import './TopicBlock.css';
import Question from '../Question/Question';
import topicsData from '../data/topics.json';
import MajorBlock from '../Major-block/MajorBlock';


function TopicBlock(){
    return (
        <div className="container">
            <Question q="How much time do you have?"/>
            <div className="hours-container">
                {topicsData.topics.map((topic)=>{
                    return <MajorBlock key={topic.id} data={topic.label}/>
                })}
            </div> 
        </div>
    );
}

export default TopicBlock;