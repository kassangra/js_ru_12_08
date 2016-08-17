import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { comment } = this.props;
        return (
            <li key = {comment.id}>
                <h3>{comment.user}</h3>
                <article>{comment.text}</article>
            </li>
        );
    }
}