import './Language.css'
const Language = (props) => {
    const {name, votes, addOne, btn} = props;
    return (
        <div className="container">
            <span>{votes}</span>
            <span>{name}</span>
            <button id={btn} onClick={addOne}>Click Here</button>
        </div>
    )
}

export default Language;