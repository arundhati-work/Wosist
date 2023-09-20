import Navbar from "../Navbar/Navbar";
import TimeFrame from "../TimeFrame/TimeFrame";
import TopicBlock from "../TopicBlock/TopicBlock";
import SubtopicBlock from "../SubtopicBlock/SubtopicBlock";
import GeneratingPlan from "../GeneratingPlan/GeneratingPlan";
import './MainContainer.css';

function MainContainer(){
    return (
        <div className="frame">
            <div className="main-container">
                <Navbar/>
                <div className="frame-container">
                    <GeneratingPlan/> 
                </div>
            </div>
        </div>
        
    );
}

export default MainContainer;