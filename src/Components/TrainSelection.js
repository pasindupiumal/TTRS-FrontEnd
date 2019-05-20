import React, {Component} from 'react';

class TrainSelection extends Component{
    
    handleOnClick = (e) => {
        this.props.loadTheOtherPage();
        this.props.history.push('/Home/Payment');
    }

    render(){
        return(
            <div className="TrainSelection">
                 
                <h3 className="title center">Train Selection</h3>
            </div>
        )
    } 
}

export default TrainSelection;