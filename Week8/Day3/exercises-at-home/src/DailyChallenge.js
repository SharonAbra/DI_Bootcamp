import React from 'react';
import Form from './Form'

class DailyChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            age:'',
            gender: '',
            destination: '',
            nuts_free: '',
            lactose_free: '',
            vegan: ''
        }
    }

    handleChange = (e) => {
            this.setState({[e.target.name]:e.target.value})
    }

    handleCheck = (e) => {
        const { name, checked } = e.target
        this.setState({ [name]: checked ? 'on' : '' })
    }


    render() {
        return (
            <>
                <Form handleChange={this.handleChange} handleCheck={this.handleCheck} handleSubmit={this.handleSubmit}/>
                <div>
                    <h1>Entered Information</h1>
                    <p>Your Name: {this.state.first_name} {this.state.last_name}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.destination}</p>
                    <p><b>Your dietary restrictions:</b></p>
                    <p>{this.state.nuts_free}</p>
                    <p>{this.state.lactose_free}</p>
                    <p>{this.state.vegan}</p>
                </div>
            </>
        )
    }
}

export default DailyChallenge;

