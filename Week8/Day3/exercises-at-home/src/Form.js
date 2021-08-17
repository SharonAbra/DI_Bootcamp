const Form = (props) => {
    const {handleChange} = props;
  return (
    <>
        <div>
            <form>
                <div>
                    <input onChange={handleChange} type="text" name="first_name" placeholder="First Name"></input>
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="last_name" placeholder="Last Name"></input>
                </div>
                <div>
                    <input onChange={handleChange} type="number" name="age" placeholder="Age"></input>
                </div>
                <div>
                    <input onChange={handleChange} name="gender"type="radio" value="male"></input>
                    <label >Male</label>
                </div>
                <div>
                    <input onChange={handleChange} name="gender" type="radio" value="female"></input>
                    <label >Female</label>
                </div>
                <div>
                    <p>Select your destination</p>
                    <select name="destination" onChange={handleChange}>
                    <option value="" disabled selected hidden>--Please choose a destination--</option>
                        <option>Thailand</option>
                        <option>Japan</option>
                        <option>Brazil</option>
                    </select>
                </div>
                <div>
                    <p>Dietary restrictions:</p>
                    <div>
                        <input onChange={handleChange} type="checkbox" value="Nuts free" name="nuts_free"></input>
                        <label >Nuts free</label>
                    </div>
                    <div>
                        <input onChange={handleChange} type="checkbox" value="Lactose free" name="lactose_free"></input>
                        <label >Lactose free</label>
                    </div>
                    <div>
                        <input onChange={handleChange} type="checkbox" value="Vegan"name="vegan"></input>
                        <label >Vegan</label>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}
export default Form;