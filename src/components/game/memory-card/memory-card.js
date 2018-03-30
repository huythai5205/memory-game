import React, {Component} from 'react';
import './memory-card.css';

export default class MemoryCard extends Component {

    constructor(props) {
        super(props);

        this.imgHasClicked = this
            .imgHasClicked
            .bind(this);
    }

    imgHasClicked(event) {
        if (this.props.memoryCard.hasClicked === 0) {
            this.props.memoryCard.hasClicked = 1;
            console.log(this.props.memoryCard.hasClicked);
        } else {
            console.log("already clicked");
        }
    }

    render() {
        return (
            <div className="col-md-3 col-sm-4 col-xs-6">
                <div onClick={this.imgHasClicked} className="memory-card">
                    <img src={this.props.memoryCard.url} alt=""/>
                    <p>Has Clicked: {this.props.memoryCard.hasClicked}</p>
                </div>
            </div>

        )
    }
}
