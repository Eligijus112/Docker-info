// Importing the react class for componnet building
import React from 'react';
import Button from 'react-bootstrap/Button';

// API calls 
import axios from 'axios';

// Global store
import { connect } from 'react-redux'

// Defining the sign class
class Sign extends React.Component {

    state = {
        signName: this.props.name,
        logo: this.props.logo,
        dispatch: this.props.dispatch
    }

    playGame = () => {
        axios.get('http://localhost:5000/game?outcome=' + this.state.signName).then(
            res => this.state.dispatch({
                type: "SET_SIGNS", 
                signUser: this.state.signName,
                signAI: res.data.computer_sign,
                outcome: res.data.outcome
            })
        )
    }

    render() {
        return (
            <div>
                <div className='signName'>
                    {this.state.signName}
                </div>
                <Button onClick={this.playGame}>
                    <img src={this.state.logo} alt={this.state.signName}/> 
                </Button>
            </div>
            )
    }
}

export default connect()(Sign);