import React, { Component } from 'react';
import './game.css';

import CardList from './card-list/card-list';

import ant_man from '../../images/ant_man.jpg';
import avengers from '../../images/avengers.jpg';
import black_panther from '../../images/black_panther.jpg';
import deadpool from '../../images/deadpool.jpg';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            memoryCards: [
                {
                    url: ant_man,
                    hasClicked: false
                }, {
                    url: avengers,
                    hasClicked: false
                }, {
                    url: black_panther,
                    hasClicked: false
                }, {
                    url: deadpool,
                    hasClicked: false
                }
            ]
        }

        this.cardClicked = this.cardClicked.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentWillMount() {
        const currentState = this.state.memoryCards;
        const newMemState = this.shuffleCards(currentState);
        this.setState({ ...this.state, memoryCards: newMemState });
    }

    shuffleCards(arr) {
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
        return newArray;

    }

    resetGame() {
        if (this.props.score === this.state.memoryCards.length) {
            this.props.setScore();
        }
        const currentState = this.state.memoryCards;
        currentState.forEach(card => {
            card.hasClicked = false;
        });
        this.props.resetScore();
        this.setState({ memoryCards: currentState });
    }

    cardClicked(id) {
        if (!this.state.memoryCards[id]['hasClicked']) {
            this.props.setScore();
            const currentState = this.state.memoryCards;
            currentState[id]['hasClicked'] = true;
            const newMemState = this.shuffleCards(currentState);
            this.setState({ ...this.state, memoryCards: newMemState });
        } else {
            this.resetGame();
        }
    }

    render() {
        return (
            <div className="game">
                <CardList memoryCards={this.state.memoryCards} cardClicked={this.cardClicked} />
            </div>
        );
    }
}
