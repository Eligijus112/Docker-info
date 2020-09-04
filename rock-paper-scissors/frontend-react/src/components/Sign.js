// Importing the react class for componnet building
import React from 'react';

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
                {this.state.signName}
                <img src={this.state.logo} alt={this.state.signName} onClick={this.onClick}/> 
            </div>
            )
    }
}

export default Sign;