import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="Header">
                <div className="row">
                    <div className="col-sm">
                        <h4>Clicky Game</h4>
                    </div>
                    <div className="col-sm">
                        <h4>Click an image to begin!</h4>
                    </div>
                    <div className="col-sm">
                        <h4>Score: {this.props.state.score} | Top Score: {this.props.state.topScore}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
