import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost} from '../actions/index';
import { Link } from 'react-router-dom';


class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div></div>;
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>
                    {post.content}
                </p>

                <button className="btn btn-danger text-white mb-3" onClick={this.onDeleteClick}>
                    Delete
                </button>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDetail);