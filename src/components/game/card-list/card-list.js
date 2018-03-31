import React, {Component} from 'react';
import './card-list.css';

import MemoryCard from '../memory-card/memory-card';

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.shuffleCards = this
            .shuffleCards
            .bind(this);
    }

    shuffleCards(array) {
        console.log(array);

        if (array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        console.log(array);
        return array;
    }

    render() {
        return (
            <div className="card-list">
                <div className="row row justify-content-around">
                    {this
                        .shuffleCards(this.props.memoryCards)
                        .map((memoryCard) => {
                            return (<MemoryCard memoryCard={memoryCard} shuffleCards={this.shuffleCards}/>)
                        })}
                </div>

            </div>
        );
    }
}
