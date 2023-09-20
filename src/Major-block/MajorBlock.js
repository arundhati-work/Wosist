import './MajorBlock.css';


function MajorBlock(props){
    return (
        <div className="block">
            <p>{props.data}</p>
        </div>
    )
}

export default MajorBlock;