import React from 'react';
import Register from './Register';

class Comp3 extends React.Component{
    constructor(){
        super()
        this.state = { carName: 'Mustang' , color:'Yellow'}
    }

    render(){
        const { part } = this.props;
        
        let change = () => {
            // console.log('clicked')
            this.setState({carName:"Accord"})
        }

        return(
            <>
             <h6>Conditional Rendering</h6>
             {
             part == 'React' ?
             <h2> React</h2> :
             <h2> Shared Data is not React</h2>
             }

            { part == 'React' && <h2> React</h2> }

            <h6> State in React </h6>
            <p> Car Name is: {this.state.carName} </p>
            <button className="btn btn-success text-light mx-2" onClick={ () => {change()}}> Change car name </button>
             <Register />
            </>
        );
    }
}

export default Comp3;