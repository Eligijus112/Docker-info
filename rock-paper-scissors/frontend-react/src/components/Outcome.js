// Importing the react class for componnet building
import React from 'react';

// Defining the outcome class
class Outcome extends React.Component {

    getOutcome = () => {
        if(this.props.outcome==0){
            return <p> Draw! </p>
        }
        
        if(this.props.outcome==1){
            return <p> User wins! </p>
        }

        if(this.props.outcome==-1){
            return <p> AI wins! </p>
        }
    }

    render() {

        const outcome = this.getOutcome()

        return (
            <div>
                {this.props.signUser && 
                <div>
                    <p>You have chosen: {this.props.signUser} </p>
                    <p>AI has chosen: {this.props.signAI} </p>
                    Result: {outcome}
                </div>
                }
            </div>
            )
    }
}

export default Outcome;