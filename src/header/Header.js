import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="Header">
                <p>This is {this.props.title}</p>
            </div>
        )
    }
}

export default Header;