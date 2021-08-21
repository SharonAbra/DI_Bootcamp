import React from 'react';
import Countries from './Countries';

class AutoCompletedText extends React.Component{
    constructor() {
        super();
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    filter = (e) => {
        let suggestions = Countries.filter(country => country.toLowerCase().includes(e.target.value));
        this.setState({suggestions:suggestions});
    }

    setText = (e) => {
        this.setState({text:e.target.value})
    }

    render() {
        return (
            <>
                <h1>Auto Completed</h1>
                <input type="text" onChange={this.filter} onClick={this.setText} defaultValue={this.state.text}></input>
                <ul>
                    {
                    this.state.suggestions.map((item,i) => {
                        return <li key={i} onClick={this.setText}>{item}</li>
                    })
                    }
                </ul>
                <div>Suggestions: {this.state.suggestions.length}</div>
            </>
        )
    }
}

export default AutoCompletedText;