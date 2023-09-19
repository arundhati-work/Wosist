import './MajorBlock.css';


function MajorBlock(props){
    return (
        <div className="block">
            <p>{props.hours}</p>
        </div>
    )
}

export default MajorBlock;