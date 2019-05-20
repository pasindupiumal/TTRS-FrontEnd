import React, {Component} from 'react';
import axios from 'axios';

class TrainSelection extends Component{
    
    state = {
        origin: '',
        destination: '',
        trains: []
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {origin, destination} = this.state;

        axios.get('http://localhost:3000/api/trains', {
            params:{
                origin: origin,
                destination: destination,
            }
        }).then((res) => {

            this.setState({
                trains: res.data
            })
        }).catch((err) => {
            console.log(err.message);
        })
    
    }

    handleOnClick = (train) => {
        this.props.getSelectedTrain(train);
        this.props.history.push('/Home/Payment');
    }


    render(){
        
        return(
            <div className="TrainSelection">
                 
                <h4 className="title center">Train Selection</h4>

                <div id="homepage">

                    <form onSubmit={this.handleSubmit}>

                        <ul id="horizontal-list">
                            
                            <li> 
                                <label>Origin</label>
                                <input type="text" id="origin" placeholder="Origin" onChange={this.handleChange}/>

                            </li>

                            <li>
                                <label>Destination</label>
                                <input type="text" id="destination" placeholder="Destination" onChange={this.handleChange}/>

                            </li>

                            <li>
                                <button>Get Train Shedules</button>
                            </li>
                        </ul>
                    </form>


                    <div className="collection center">
                        <div className="collection-item center">
                            <table>
                                <tbody > 
                                    <tr>
                                        <th>Train Name</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Departure Time</th>
                                        <th>Price(Rs)</th>
                                    </tr>

                                    {
                                        this.state.trains.length ? (
                                            
                                            this.state.trains.map((train, key) => {
                                                return(
                                                    <tr key={key} onClick={()=>{this.handleOnClick(train)}}>
                                                        <td>{train.trainName}</td>
                                                        <td>{train.origin}</td>
                                                        <td>{train.destination}</td>
                                                        <td>{train.departureTime}</td>
                                                        <td>{train.price}</td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td><p className="center">No Train Shedule Found</p></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                
                            </table>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        )
    } 
}

export default TrainSelection;