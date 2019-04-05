import React from 'react'

class NavbarButton extends React.Component {

    render() {
        return(
            <button onClick={this.props.callback}>{this.props.title}</button>
        )
    }
}

export default NavbarButton