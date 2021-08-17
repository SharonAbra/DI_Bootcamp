import React from 'react';

class Onclick extends React.Component {
    constructor(props) {
        super(props);
        this.shootRegular = this.shootRegular.bind(this);
        this.shootRegularWithParameter = this.shootRegularWithParameter.bind(this,'Goal');
    }

    shoot(){
        alert("Great Shot!");
    }

    shootRegular(){
        alert(this);
    }

    shootRegularWithParameter(a){
        alert(a);
    }

    shootWithArgument(b){
        alert(b);
    }

    shootTwo = () => {
        alert(this);
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.shoot}>Take the shot!</button>
                </div>
                <div>
                    <button onClick={this.shootRegular}>Keep Shooting!</button>
                </div>
                <div>
                    <button onClick={this.shootRegularWithParameter}>Shooting!</button>
                </div>
                <div>
                    <button onClick={()=>this.shootWithArgument('Goal')}>Shooting!</button>
                </div>
                <div>
                    <button onClick={this.shootTwo}>Keep Shooting!</button>
                </div>
            </>
        )
    }
}

export default Onclick;