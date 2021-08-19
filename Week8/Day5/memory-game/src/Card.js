
const Card = (props) => {
    const {name, occupation, image, onClick, id} = props
    console.log()
    return (

        <div className="card">

            <img src={image} 
            alt="superhero" 
            width="200" 
            height="260" 
            onClick={onClick}
            id={id}/>

            <div>
                <h2>Name: {name}</h2>
                <p>Occupation: {occupation}</p>
            </div>
        </div>
    )
}

export default Card;