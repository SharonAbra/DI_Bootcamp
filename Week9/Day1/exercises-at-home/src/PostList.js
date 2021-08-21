import React from  'react';

class PostList extends React.Component {
    constructor () {
        super();
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res=> res.json())
        .then (data => this.setState({posts:data}))
    }

    render() {
        const {posts} = this.state;
        return posts.length ? 
            (
                <>
                    <div>
                        <h1>List of posts</h1>
                        <ul>
                        {
                            posts.map((item, i) => {
                                return <div key={i}>
                                            <div><b>ID: {item.id}</b></div>
                                            <div><b>Title:</b> {item.title}</div>
                                            <div><b>Body:</b> {item.body}</div>
                                            <div>..................</div>
                                        </div>
                            })

                        }
                        </ul>
                    </div>
                </>
            ) : 
            (<div>There are no posts to show</div>)
    }
}

export default PostList