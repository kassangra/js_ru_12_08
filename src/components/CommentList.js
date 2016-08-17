import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    }
    render() {
        const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject}/></li>)
        const comments = this.state.isOpen ? <ul>{commentItems}</ul> : null;
        return (
            <section>
                <header>
                    <h3>Comments ({commentItems.length}) <button onClick = {this.toggleComments}>{this.state.isOpen ? 'Hide' : 'Show'}</button>
                    </h3>                    
                </header>
                {comments}
            </section>
        )
    };
    toggleComments = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}