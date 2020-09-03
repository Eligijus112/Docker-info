// Importing the react class for componnet building
import React from 'react';

// Defining the sign class
class Sign extends React.Component {

    state = {
        signName: this.props.name
    }
    
    
    render() {

        return (this.state.signName)

    }
}

export default Sign;