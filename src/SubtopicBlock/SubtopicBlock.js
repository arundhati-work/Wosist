import './SubtopicBlock.css';
import Question from '../Question/Question';
import subtopicsData from '../data/subtopics.json';
import MinorBlock from '../MinorBlock/MinorBlock';


function SubtopicBlock(){
    return (
        <div className="container">
            <Question q="Let's narrow it down a bit?"/>
            <div className="st-container">
                {subtopicsData.subtopics.map((subtopic)=>{
                    return <MinorBlock key={subtopic.id} data={subtopic.label}/>
                })}
            </div> 
        </div>
    );
}

export default SubtopicBlock;