import './MinorBlock.css';


function MinorBlock(props){
    return (
        <div className="minor-block">
            <p>{props.data}</p>
        </div>
    )
}

export default MinorBlock;