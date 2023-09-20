import Navbar from "../Navbar/Navbar";
import TimeFrame from "../TimeFrame/TimeFrame";
import TopicBlock from "../TopicBlock/TopicBlock";
import SubtopicBlock from "../SubtopicBlock/SubtopicBlock";
import './MainContainer.css';

function MainContainer(){
    return (
        <div className="frame">
            <div className="main-container">
                <Navbar/>
                <div className="frame-container">
                    <TimeFrame/> 
                </div>
            </div>
        </div>
        
    );
}

export default MainContainer;