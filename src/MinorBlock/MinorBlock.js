import './MinorBlock.css';


function MinorBlock(props){
    return (
        <div className="block">
            <p>{props.data}</p>
        </div>
    )
}

export default MinorBlock;