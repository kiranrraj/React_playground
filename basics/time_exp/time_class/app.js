class Time extends React.Component{
  render(){
    return(
      <div>
        <h1>Component Created using Class</h1>
        <h2>Time : {this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Time date={new Date}/>, document.getElementById('main'));