import {connect} from 'react-redux';
import {Link } from 'react-router-dom'
import React from 'react';
import blog from './blog.png';

class Home extends React.Component {
    render () {
        const {posts} = this.props;
        return (posts.length > 0 ? 
            (
            <div className="container home">
                <h4>Home</h4>
                {
                    posts.map((item, i) => {
                        return (
                            <div key={item.id} className="post card">
                                <img src={blog} alt="blog"></img>
                                <div className="card-content">
                                    <span className="card-title"> <Link to={`/${item.id}`}>{item.title}</Link></span>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            ) :
                (
                <>
                    <h1>Home</h1>
                    <p>There are no posts to show....</p>
                </>
                )
            )
    }
}

const mstp = (state) => {
    return {posts:state.posts}
}


export default connect(mstp)(Home);