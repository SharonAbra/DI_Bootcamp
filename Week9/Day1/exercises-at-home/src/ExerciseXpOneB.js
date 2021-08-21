import './ExerciseXpOneB.css';
const ExerciseXpOneB = (props) => {
    const { submitHandler, changeHandler } = props
    return (
        <>
        <div className="container">
            <h1>Welcome!</h1>
            <p>Please provide your information below</p>
            <form onSubmit={submitHandler}>
                <input
                    placeholder= "First Name"
                    id="first_name"
                    type="text"
                    onChange = {changeHandler}
                />
                <input
                    placeholder="Last Name"
                    id="last_name"
                    type="text"
                    onChange = {changeHandler}
                />
                <input
                placeholder="Phone number"
                    id="phone"
                    type="number"
                    onChange = {changeHandler}
                />
                <input
                placeholder="Email address"
                    id="email"
                    type="email"
                    onChange = {changeHandler}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>

    )
}

export default ExerciseXpOneB;