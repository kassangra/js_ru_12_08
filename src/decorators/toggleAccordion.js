import React from 'react'

export default (Component) => {
    return class ToggleAccordionComponent extends React.Component {

        state = {
            openItemId: null
        }

        isOpen = id => this.state.openItemId === id

        toggleOpenItem = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openItemId: this.state.openItemId !== id ? id : null
            })
        }
        
        render() {
            return <Component {...this.props }
                isOpen = { this.isOpen }
                toggleOpen = { this.toggleOpenItem }
            />
        }
    }
}
