// const Car = () => {
//     return (
//         <div className="container">
//             <h2>Hi, I am a car!</h2>
//         </div>
//     )
// }

import React from 'react';
import Garage from './Garage'

class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            color:'red'
        }
    }

    render() {
        return (
            <>
                <Garage size={'small'}/>
                <div className="container">
                    <h2>Hi, I am a {this.state.color} car!</h2>
                </div>
            </>
        )
    }
}

export default Car;