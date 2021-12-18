import React, { Component } from 'react'
import './App.css'

class App extends Component{

  static defaultProps = {
    colors: ["Red", "Green", "Violet", "Blue"]
  }

  constructor(props){
    super(props);
    this.state = {color: 'cyan'}
  }

  handleClick(newColor){
    this.changeColor(newColor);
  }

  changeColor(newColor){
    this.setState({color:newColor});
  }

  render(){
    return(
      <div className='container' style={{backgroundColor: this.state.color}}>
        {this.props.colors.map(color => {
          const colorObj = {backgroundColor: color};
          // return <button style={colorObj} onClick={this.handleClick.bind(this, color)}>Click</button>
          return <button style={colorObj} onClick={() => this.handleClick(color)}>Click</button>
        })}
      </div>
    )
  }
}


export default App;
