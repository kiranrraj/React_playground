import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    render(){
        return(
            <i className={`fas fa-dice-${this.props.val} ${this.props.animation? "shake" : "" }`}></i>
        )
    }
}

export default Die;