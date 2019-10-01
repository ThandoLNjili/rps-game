import React from 'react';
import Rock from '../Images/rock.png';
import Paper from '../Images/paper.png';
import Scissors from '../Images/scissors.png';

export default class Main extends React.Component {
    state = {
        userScore: 0,
        compScore: 0,
        resultMessage: 'Choose Your Weapon'
    }

    getComputerChoice() {
        const choices = ['r', 'p', 's', 's', 'r', 'p', 'p', 's', 'r', 's', 'r', 'p'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    win() {
        this.setState(prevState => {
            return {userScore: prevState.userScore + 1 }
        });
    }

    lose() {
        this.setState(prevState => {
            return { compScore: prevState.compScore + 1 }
        });
    }

    game(userChoice) {
        const computerChoice = this.getComputerChoice();

        switch (userChoice + computerChoice) {
            case 'rs':
                this.setState({ resultMessage: 'Rock beats scissors. You Win!' });
                this.win();
                break;
            case 'pr':
                this.setState({ resultMessage: 'Paper beats rock. You Win!' });
                this.win();
                break;
            case 'sp':
                this.setState({ resultMessage: 'Scissors beat paper. You Win!' });
                this.win();
                break;

            case 'sr':
                this.setState({ resultMessage: 'I chose rock. Take Your L!' });
                this.lose();
                break;
            case 'rp':
                this.setState({ resultMessage: 'I chose paper. Take Your L!' });
                this.lose();
                break;
            case 'ps':
                this.setState({ resultMessage: 'I chose scissors. Take Your L!' });
                this.lose();
                break;

            case 'rr':
                this.setState({ resultMessage: `There's no rock on rock violence here. Lets call it a tie.` });
                break;
            case 'pp':
                this.setState({ resultMessage: `There's no paper on paper violence here. Lets call it a tie.` });
                break;
            case 'ss':
                this.setState({ resultMessage: `There's no scissors on scissors violence here. Lets call it a tie.` });
                break;
            default:
                this.setState({ resultMessage: 'Choose Your Weapon!' });
        }
    }

    render() {
        return (
            <div className='main'>
                <div className="score-board">
                    <div className="user-label badge">user</div>
                    <div className="computer-label badge">comp</div>
                    <span className="user-score">{this.state.userScore}</span>:<span className="computer-score">{this.state.compScore}</span>
                </div>

                <div className="result">
                    <p>{this.state.resultMessage}</p>
                </div>

                <div className="choices">
                    <div className="choice r">
                        <img onClick={() => this.game('r')} src={Rock} alt="" />
                    </div>
                    <div className="choice p">
                        <img onClick={() => this.game('p')} src={Paper} alt="" />
                    </div>
                    <div onClick={() => this.game('s')} className="choice s">
                        <img src={Scissors} alt="" />
                    </div>
                </div>

                <p className="action-message">Make Your Move.</p>
            </div>
        )
    }
}

// export default Main;