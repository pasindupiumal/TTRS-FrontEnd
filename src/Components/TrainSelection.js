import React, {Component} from 'react';

class TrainSelection extends Component{
    
    handleOnClick = (e) => {
        this.props.loadTheOtherPage();
        this.props.history.push('/Home/Payment');
    }

    render(){
        return(
            <div className="TrainSelection">
                <button onClick={this.handleOnClick}>Load the other page</button>
            </div>
        )
    }
}

export default TrainSelection;