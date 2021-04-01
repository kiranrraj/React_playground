function tick() {
    const element = (
      <div>
        <h1>Time</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('main')
    );
  }
  
  function Time(props){
      return( 
          <div>
              <h1>Component created using functions</h1>
              <h2>Time: {props.date.toLocaleTimeString()}</h2>
          </div>
      )
  }

  function display(){
      ReactDOM.render(<Time date={new Date()}/>, document.getElementById('root'));
  }

  setInterval(tick, 1000);
  setInterval(display, 1000);