import React, {
    Component
} from 'react';
import './card-list.css';

import MemoryCard from '../memory-card/memory-card';

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.shuffleCards = this
            .shuffleCards
            .bind(this);
    }

    shuffleCards(arr) {
        console.log([...arr]);
        const initalLength = arr.length
        let length = arr.length;
        const newArray = [];
        while (newArray.length !== initalLength) {
            //generate random index then push that index to new array
            const random = Math.floor(Math.random() * length + 1);
            const randomVal = arr.splice(random - 1, 1);
            newArray.push(randomVal[0]);
            length--;
        }
        console.log(newArray);
        return newArray;

    }


    render() {
        return (<div className="card-list" >
            <div className="row row justify-content-around" > {
                this.shuffleCards(this.props.memoryCards).map((memoryCard, index) => {
                    return (< MemoryCard cardClicked={this.props.cardClicked.bind(this)} key={memoryCard.url} cardId={index} memoryCard={
                        memoryCard
                    }
                        shuffleCards={
                            this.shuffleCards
                        } />)
                })
            } </div>

        </div>
        );
    }
}