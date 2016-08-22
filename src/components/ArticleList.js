import React, { Component } from 'react'
import Article from './Article'
import ToggleAccordion from '../decorators/toggleAccordion'

class ArticleList extends Component {
    
    render() {
        const {isOpen, toggleOpen } = this.props
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject} isOpen = { isOpen(articleObject.id) }  toggleOpen = { toggleOpen(articleObject.id)} />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default ToggleAccordion(ArticleList)