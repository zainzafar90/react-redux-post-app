
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';


class PostIndex extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPostList() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                   <h4> {post.title} </h4>
                </li>
            );
        });
      
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary text-white mb-3" to="/posts/new">
                        New Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPostList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps( state ){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
