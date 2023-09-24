import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import TimeFrame from "../TimeFrame/TimeFrame";
import TopicBlock from "../TopicBlock/TopicBlock";
import SubtopicBlock from "../SubtopicBlock/SubtopicBlock";
import GeneratingPlan from "../GeneratingPlan/GeneratingPlan";
import './MainContainer.css';

function MainContainer(){

    const [currentComponent,setCurrentComponent] = useState(1);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedSubtopic, setSelectedSubtopic] = useState('');

    const nextComponent = () => {
        setCurrentComponent((prevComponent) =>
            prevComponent < 4? prevComponent+1: 4
        )
    }

    const previousComponent = () => {
        setCurrentComponent((prevComponent) =>
            prevComponent > 1? prevComponent-1: 1
        )
    }

    const isPreviousDisabled = currentComponent === 1;
    const isNextDisabled = currentComponent === 4;

    return (
        <div className="frame">
            <div className="main-container">
                <Navbar/>
                <div className="frame-container">
                    {currentComponent === 1 && <TimeFrame selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame}/>} 
                    {currentComponent === 2 && <TopicBlock selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>} 
                    {currentComponent === 3 && <SubtopicBlock selectedSubtopic={selectedSubtopic} setSelectedSubtopic={setSelectedSubtopic}/>} 
                    {currentComponent === 4 && <GeneratingPlan timeFrame={selectedTimeFrame} topic={selectedTopic} subtopic={selectedSubtopic}/>} 
                </div>
                <div className="buttons-container">
                    <button onClick={previousComponent} disabled={isPreviousDisabled}>&lt;</button>
                    <button onClick={nextComponent} disabled={isNextDisabled}>&gt;</button>
                </div>
            </div>
        </div>
        
    );
}

export default MainContainer;