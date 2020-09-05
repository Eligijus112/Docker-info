// Importing the react class for componnet building
import React from 'react';
import Button from 'react-bootstrap/Button';

// Defining the sign class
class Sign extends React.Component {

    state = {
        signName: this.props.name,
        logo: this.props.logo
    }
    
    onClick() {
        console.log("This was clicked!")
    }

    render() {
        return (
            <div>
                <div className='signName'>
                    {this.state.signName}
                </div>
                <Button onClick={this.onClick}>
                    <img src={this.state.logo} alt={this.state.signName}/> 
                </Button>
            </div>
            )
    }
}

export default Sign;