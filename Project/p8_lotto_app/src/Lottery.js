import './Lottery.css'
import Ball from './Ball'
import React, { Component } from 'react'

class Lottery extends Component{
    static defaultProps = {
        title: "Lotto",
        maxBall: 6,
        maxVal: 40
    };

    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBall})};
        this.handleClick = this.handleClick.bind(this);
    }

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxVal) + 1)
        }));
    }

    handleClick(){
        this.generate();
    }

    render() {
        return(
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                {/* Ball Generation */}
                <div>{this.state.nums.map(n => <Ball num={n}/>)}</div>
                {/* Ball Generation */}
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery;