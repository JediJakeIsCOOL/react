import React, { Component } from 'react'
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import { connect } from 'react-redux'

class Counter extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <CounterOutput counterLabel= {this.props.ctr}/>
                <CounterControl title= "Increment + 1" onButtonPush = {this.props.onIncrementCounter}/>
                <CounterControl title= "Decrement - 1" onButtonPush = {this.props.onIncrementCounterNegOne}/>
                <CounterControl title= "Increment + 5" onButtonPush = {this.props.onIncrementCounterPosFive}/>
                <CounterControl title= "Decrement - 5" onButtonPush = {this.props.onIncrementCounterNegFive}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        first: state.firstName
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({type :'INC_COUNTER'}),
        onIncrementCounterNegOne: () => dispatch({type: 'INC_COUNTER_NEG_ONE'}),
        onIncrementCounterPosFive: () => dispatch({type: 'INC_COUNTER_POS_FIVE'}),
        onIncrementCounterNegFive: () => dispatch({type: 'INC_COUNTER_NEG_FIVE'})
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(Counter)