import React, { Component } from 'react';
import * as actions from 'actions';
import { connect } from 'react-redux';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = event => {
        this.setState({ comment: event.target.value });
        // RERENDER
    }

    handleSubmit = event => {
        event.preventDefault();

        // call an action creator
        this.props.saveComment(this.state.comment);
        // save comment

        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);