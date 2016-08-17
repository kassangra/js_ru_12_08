import React, { Component } from 'react';
import CommentList from './CommentList';


export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const comments = article.comments && article.comments.length ? <CommentList comments = {article.comments}/> : <h5>No comments</h5>
        const body = this.state.isOpen ? <section>{article.text}{comments}</section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}