const Cities = (props) => {
    const {cities} = props
    return (
        <div className="container">
           <select>
                {
                cities.map((item) => {
                    return <option>{item}</option>;
                    })
                }
           </select>
        </div>
    )
}

export default Cities;