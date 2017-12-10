import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                <li className='comment-item'>
                    <span>{this.props.comment}</span>
                </li>
                <li className='comment-item'>
                    <span>{this.props.comment}</span>
                </li>
            </div>
        )
    }
}

export default Comment;