const Countries = (props) => {
    const {countries, handleChange} = props;
        return (
            <div className="container">
                <select onChange={handleChange}>
                    {
                        countries.map((item) => {
                            return <option value={item.country_id}>{item.country}</option>;
                          })
                    }
                </select>
            </div>
        )
}

export default Countries;
