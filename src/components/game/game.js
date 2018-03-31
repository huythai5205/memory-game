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

        this.cardClicked = this.cardClicked.bind(this);
        this.state = {
            memoryCards: [
                {
                    url: ant_man,
                    name: 'Any-Man',
                    hasClicked: false
                }, {
                    url: avengers,
                    name: 'Any-Man',
                    hasClicked: false
                }, {
                    url: black_panther,
                    name: 'Any-Man',
                    hasClicked: false
                }, {
                    url: deadpool,
                    name: 'Any-Man',
                    hasClicked: false
                }
            ]
        }
    }
    componentDidMount() {
        console.log(this.state.memoryCards);
    }

    cardClicked(id) {
        console.log(this.state);
        console.log(id);
        // const currentState = this.state.memoryCards;
        // console.log(currentState);
        // currentState['memoryCards'][id]['hasClicked'] = true;
        // this.setState({ ...currentState });
    }

    render() {
        return (
            <div className="game">
                <CardList memoryCards={this.state.memoryCards} cardClicked={this.cardClicked} />
            </div>
        );
    }
}
