import React, {
    Component
} from 'react';
import './card-list.css';

import MemoryCard from '../memory-card/memory-card';

export default class CardList extends Component {

    render() {
        return (<div className="card-list" >
            <div className="row row justify-content-around" > {
                this.props.memoryCards.map((memoryCard, index) => {
                    return (< MemoryCard cardClicked={this.props.cardClicked.bind(this)} key={memoryCard.url} cardId={index} memoryCard={
                        memoryCard
                    }
                    />)
                })
            } </div>

        </div>
        );
    }
}