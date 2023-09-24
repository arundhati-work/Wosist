import React, {useState} from 'react';
import './SubtopicBlock.css';
import Question from '../Question/Question';
import subtopicsData from '../data/subtopics.json';
import MinorBlock from '../MinorBlock/MinorBlock';


function SubtopicBlock({selectedSubtopic, setSelectedSubtopic}){

    const [subtopic, setSubtopic] = useState(selectedSubtopic);

    const handleSelect = (value) =>{
        setSubtopic(value);
        setSelectedSubtopic(value);
    }

    return (
        <div className="container">
            <Question q="Let's narrow it down a bit?"/>
            <p className='selected-item'>{subtopic}</p>
            <div className="st-container">
                {subtopicsData.subtopics.map((subtopic)=>{
                    return <MinorBlock key={subtopic.id} data={subtopic.label} onSelect={(value) => handleSelect(value)}/>
                })}
            </div> 
        </div>
    );
}

export default SubtopicBlock;