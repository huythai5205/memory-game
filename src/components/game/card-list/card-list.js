import React, {Component} from 'react';
import './card-list.css';

import MemoryCard from '../memory-card/memory-card';

export default class CardList extends Component {

    shuffle(array) {
        console.log(array);
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        console.log(array);
        return array;
    }

    render() {
        return (
            <div className="card-list">
                <div className="row row justify-content-around">
                    {this
                        .props
                        .memoryCards
                        .map((memoryCard) => {
                            return (<MemoryCard memoryCard={memoryCard}/>)
                        })}
                </div>

            </div>
        );
    }
}
