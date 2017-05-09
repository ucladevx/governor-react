import React, { PropTypes } from 'react'

class NavigationTile extends React.Component {
    render () {
        return(
            <div className="navigation-tile">
                <i className={"icon fa " + this.props.icon}></i>
                <p className="Body-2White">{this.props.text}</p>
            </div>
        );
    }
}

export default NavigationTile;