import { connect } from 'react-redux';
import {deletePost} from '../redux/actions.js'
import React from 'react';

class Post extends React.Component {

    handleClick = () => {
        deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render () {
       const {post} = this.props;
        return (post !== undefined ?  (
            <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button type="button" onClick={this.handleClick}>Delete Post</button>
            </>
        ) :
        <h1>Loading...</h1>
        )
    }
}


const mstp = (state, ownProps) => {
    return {
        post:state.posts.find(post => post.id === ownProps.match.params.id)
    }
}

const mdtp = (dispatch) => {
    return {
    deletePost: () => dispatch(deletePost())
    }
}

export default connect(mstp, mdtp)(Post);