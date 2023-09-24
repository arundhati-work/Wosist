import './MinorBlock.css';


function MinorBlock({data, onSelect}){
    return (
        <button className="minor-block" onClick={()=>onSelect(data)}>
            {data}
        </button>
    )
}

export default MinorBlock;