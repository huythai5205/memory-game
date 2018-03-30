import React, {Component} from 'react';
import './banner.css';

export default class Banner extends Component {

    render() {
        return (
            <div className="Banner">
                <h1>Clicky Game!</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
            </div>
        )
    }
}
