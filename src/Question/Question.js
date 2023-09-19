import './Question.css';

function Question(props){
    const q = props.q;
    return (
        <p>{q}</p>
    );
}

export default Question;