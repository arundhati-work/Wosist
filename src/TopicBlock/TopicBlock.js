import './TopicBlock.css';
import Question from '../Question/Question';
import topicsData from '../data/topics.json';
import MajorBlock from '../Major-block/MajorBlock';


function TopicBlock({setSelectedTopic}){
    return (
        <div className="container">
            <Question q="What topic interests you?"/>
            <div className="hours-container">
                {topicsData.topics.map((topic)=>{
                    return <MajorBlock key={topic.id} data={topic.label} onSelect={(value)=>setSelectedTopic(value)}/>
                })}
            </div> 
        </div>
    );
}

export default TopicBlock;