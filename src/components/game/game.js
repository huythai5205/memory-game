import React, {Component} from 'react';
import './game.css';

import CardList from './card-list/card-list';

import ant_man from '../../images/ant_man.jpg';
import avengers from '../../images/avengers.jpg';
import black_panther from '../../images/black_panther.jpg';
import deadpool from '../../images/deadpool.jpg';

export default class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            memoryCards: [
                {
                    url: ant_man,
                    name: 'Any-Man',
                    hasClicked: 0
                }, {
                    url: avengers,
                    name: 'Any-Man',
                    hasClicked: 0
                }, {
                    url: black_panther,
                    name: 'Any-Man',
                    hasClicked: 0
                }, {
                    url: deadpool,
                    name: 'Any-Man',
                    hasClicked: 0
                }
            ]
        }
    }

    render() {
        return (
            <div className="game">
                <CardList memoryCards={this.state.memoryCards}/>
            </div>
        );
    }
}
