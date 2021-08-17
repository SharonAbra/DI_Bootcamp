import React from 'react';

class ExerciseXPplus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: 'true',
            text: 'ON',
            username: '',
            age: null,
            message: '',
            content: 'Some text to put in the textarea'
        }
    }

    clickHandler = () => {
        alert("I was clicked");
    }

    handleKeyPress = (e) => {
        if (e.code === "Enter") {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`);
        }
    }

    switch = () => {
       if (this.state.isToggleOn === 'true'){
        this.setState({isToggleOn:'false', text:'OFF'})
       } else {
        this.setState({isToggleOn:'true', text:'ON'})
       }
    }

    setUser = (e) => {
        this.setState({username:e.target.value})
    }

    setAge = (e) => {
        console.log(typeof e.target.value);
        if (isNaN (e.target.value)) {
            
            this.setState({message:"Your age must be a number"})
        } else {
            this.setState({age:e.target.value})
        }
    }


    render() {
        return (
            <>
                <div>
                    <button onClick = {this.clickHandler}>Click me</button>
                </div>
                <div>
                    <input type="text" placeholder="Press the enter key" onKeyPress={this.handleKeyPress}></input>
                </div>
                <div>
                    <button onClick = {this.switch}>{this.state.text}</button>
                </div>
                <div>
                    <h1>Hello {this.state.username} {this.state.age}</h1>
                    <h3>Enter your name</h3>
                    <input name="name" type="text" onChange={this.setUser} ></input>
                    <h3>Enter your age</h3>
                    <input name="age" type="text" onChange={this.setAge}></input>
                    <div>{this.state.message}</div>
                </div>
                <div>
                    <textarea defaultValue={this.state.content}></textarea>
                </div>
                <div>
                    <select defaultValue="Volvo">
                        <option>Ford</option>
                        <option >Volvo</option>
                        <option>Fiat</option>
                    </select>
                </div>
            </>
        )
    }
}

export default ExerciseXPplus;

