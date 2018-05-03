import React, { Component } from 'react';
import './game.css';

import CardList from './card-list/card-list';
import Modal from 'react-modal';

//cards
import ant_man from '../../images/ant_man.jpg';
import avengers from '../../images/avengers.jpg';
import black_panther from '../../images/black_panther.jpg';
import deadpool from '../../images/deadpool.jpg';
import captain_america from '../../images/captain_america.jpg';
import guardians_of_the_galaxy from '../../images/guardians_of_the_galaxy.jpg';
import iron_man from '../../images/iron_man.jpg';
import john_wick from '../../images/john_wick.jpg';
import justice_league from '../../images/justice_league.jpg';
import logan from '../../images/logan.jpg';
import spiderman from '../../images/spiderman.jpg';
import star_wars from '../../images/star_wars.jpg';
import tomb_raider from '../../images/tomb_raider.jpg';
import transformers from '../../images/transformers.jpg';
import wonder_woman from '../../images/wonder_woman.jpg';
import xmen from '../../images/xmen.jpg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default class Game extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            memoryCards: [{
                url: ant_man,
                hasClicked: false
            }, {
                url: avengers,
                hasClicked: false
            }, {
                url: black_panther,
                hasClicked: false
            }, {
                url: captain_america,
                hasClicked: false
            }, {
                url: guardians_of_the_galaxy,
                hasClicked: false
            }, {
                url: iron_man,
                hasClicked: false
            }, {
                url: john_wick,
                hasClicked: false
            }, {
                url: justice_league,
                hasClicked: false
            }, {
                url: logan,
                hasClicked: false
            }, {
                url: spiderman,
                hasClicked: false
            }, {
                url: star_wars,
                hasClicked: false
            }, {
                url: tomb_raider,
                hasClicked: false
            }, {
                url: transformers,
                hasClicked: false
            }, {
                url: wonder_woman,
                hasClicked: false
            }, {
                url: xmen,
                hasClicked: false
            }, {
                url: deadpool,
                hasClicked: false
            }]
        }

        this.cardClicked = this.cardClicked.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.resetGame = this.resetGame.bind(this);

        //modal
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentWillMount() {
        const currentState = this.state.memoryCards;
        const newMemState = this.shuffleCards(currentState);
        this.setState({
            ...this.state,
            memoryCards: newMemState
        });
        Modal.setAppElement('body');
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
        this.setState({
            ...this.state, memoryCards: currentState
        });
        this.openModal();
    }

    cardClicked(id) {
        if (!this.state.memoryCards[id]['hasClicked']) {
            this.props.setScore();
            const currentState = this.state.memoryCards;
            currentState[id]['hasClicked'] = true;
            const newMemState = this.shuffleCards(currentState);
            this.setState({
                ...this.state,
                memoryCards: newMemState
            });
        } else {
            this.resetGame();
        }
    }

    render() {
        return (<div className="game" >
            <CardList memoryCards={this.state.memoryCards} cardClicked={this.cardClicked} />
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 ref={subtitle => this.subtitle = subtitle}>Game Over</h2>
                <button onClick={this.closeModal}>close</button>
            </Modal>
        </div >
        );
    }
}
