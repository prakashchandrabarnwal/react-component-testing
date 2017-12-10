import React, { Component, PropTypes } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = { comments: [] ,
            reverseData:"ABC"
        };
    }

    componentDidMount() {
        this.setState({
            comments: ['Comment number one']
        });
    }

    renderComments(comments) {
        return comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
    }

    reverseString(){
            var data=this.state.reverseData;
            this.setState({reverseData:data.split("").reverse().join("")});
    }

    render() {
        const commentsNode = this.renderComments(this.state.comments);
        return (
            <div className="comments-list">
                {commentsNode}
                <button onClick={()=>{this.reverseString()}}>A button</button>
            </div>
        )
    }
}

export default CommentList;