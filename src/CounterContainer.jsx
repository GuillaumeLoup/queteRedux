import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterContainer extends Component{
    render() {
        const { counter, dispatch } = this.props;
        return(
            <div>
                <p>{counter}</p>
                <button onClick={() => dispatch({ type: 'ADD' })}>+1</button>
                <button onClick={() => dispatch({ type: 'REMOVE' })}>-1</button>
                <button onClick={() => dispatch({ type: 'ADD10' })}>+10</button>
                <button onClick={() => dispatch({ type: 'REMOVE10' })}>-10</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state
});
const Counter = connect(mapStateToProps)(CounterContainer)
export default Counter;