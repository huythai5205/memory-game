import React, {Component} from 'react';
import './card-list.css';

import MemoryCard from '../memory-card/memory-card';

export default class CardList extends Component {

    render() {
        return (
            <div className="card-list">
                {this
                    .props
                    .memoryCards
                    .map((memoryCard) => {
                        return (<MemoryCard memoryCard={memoryCard}/>)
                    })}
            </div>
        );
    }
}
