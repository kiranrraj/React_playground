import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
      persons: [
          { name: "Kiran", age: 33 },
          { name: "Rajeesh", age: 34 },
          { name: "Adithyan", age: 21 }
      ]
  }

  btnHandler = () => {
      this.setState({
          persons: [
              { name: "Anitha", age: 51 },
              { name: "Vishnu", age: 26 },
              { name: "Amitha", age: 26 }
          ]
      })
  }

  render() {
      return (
          <div className="App">
              <div className="container">
                  <p>{this.state.persons[0].name}</p>
                  <p>{this.state.persons[0].age}</p>
              </div>
              <div className="container">
                  <p>{this.state.persons[1].name}</p>
                  <p>{this.state.persons[1].age}</p>
              </div>
              <div className="container">
                  <p>{this.state.persons[2].name}</p>
                  <p>{this.state.persons[2].age}</p>
              </div>
              <button onClick={this.btnHandler}>Click Here</button>
          </div>
      )
  }
};

export default App;
