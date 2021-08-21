import './ExerciseXpOne.css'
const ExerciseXpOne = (props) => {
    const { submitHandler, changeHandler } = props
    return (
        <>
        <div className="container">
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    onChange = {changeHandler}
                />
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    onChange = {changeHandler}
                />
                <label htmlFor="genre">Genre</label>
                <input
                    id="genre"
                    type="text"
                    onChange = {changeHandler}
                />
                <label htmlFor="year">Year published</label>
                <input
                    id="year"
                    type="number"
                    onChange = {changeHandler}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>

    )
}

export default ExerciseXpOne;