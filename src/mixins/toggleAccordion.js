export default {
    getInitialState() {
            return {
                openItemId: null
            }
        },
        
        isOpen(id) {
            return this.state.openItemId === id
        },

        toggleOpen(id) {
            return ev => {
                if (ev) ev.preventDefault()
                this.setState({
                    openItemId: this.state.openItemId !== id ? id : null
                })
            }
        }  

}
