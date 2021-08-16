const Garage = (props) => {
    const {size} = props;
    return (
        <div className="container">
            <header>Who lives in my {size} Garage?</header>
        </div>
    )
}

export default Garage;