import React, {useState} from 'react';
import './TopicBlock.css';
import Question from '../Question/Question';
import topicsData from '../data/topics.json';
import MajorBlock from '../Major-block/MajorBlock';


function TopicBlock({selectedTopic, setSelectedTopic}){

    const [topic, setTopic] = useState(selectedTopic);

    const handleSelect = (value) =>{
        setTopic(value);
        setSelectedTopic(value);
    }

    return (
        <div className="container">
            <Question q="What topic interests you?"/>
            <p className='selected-item'>{topic}</p>
            <div className="hours-container">
                {topicsData.topics.map((topic)=>{
                    return <MajorBlock key={topic.id} data={topic.label} onSelect={(value) => handleSelect(value)}/>
                })}
            </div> 
        </div>
    );
}

export default TopicBlock;