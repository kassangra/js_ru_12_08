import React, { Component, createClass } from 'react'
import Article from './Article'
import toggleAccordion from '../mixins/toggleAccordion'

const ArticleList = createClass({
    mixins: [toggleAccordion],

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject} isOpen = { this.isOpen(articleObject.id) }  toggleOpen = { this.toggleOpen(articleObject.id)} />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList