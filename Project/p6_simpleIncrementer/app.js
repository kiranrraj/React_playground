const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }


class App extends React.Component{
    const [ counter, setCounter ] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <Display counter = {counter}/>
                <Button onClick={this.increaseByOne} text='Plus'/>
                <Button onClick={this.setToZero} text='Zero'/>
                <Button onClick={this.decreaseByOne} text='Minus'/>
                
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));