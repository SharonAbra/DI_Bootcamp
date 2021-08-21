import React from 'react';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            array: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => this.setState({array:data, isLoaded:true}))
    }

    render() {
        const {array, isLoaded} = this.state;
        return isLoaded ? 
       (
        <div>
            <h1>List of Users</h1>
            <ul>
                {array.map((item, i) =>{
                    return <div key={i}>
                        <div><b>ID: {item.id}</b></div>
                        <div><b>Name:</b> {item.name}</div>
                        <div><b>Username:</b> {item.username}</div>
                        <div><b>Email:</b> {item.email}</div>
                        <div><b>City:</b> {item.address.city}</div>
                        <div>..................</div>
                    </div>
                })
                }
            </ul>
        </div>
      ):
      <div>Loading...</div>
    }
}

export default UserList;
