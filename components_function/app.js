function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
ReactDOM.render( <Welcome name="Kiran" />, document.getElementById('root'));

class Welcome_class extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(<Welcome_class name="kiran" />, document.getElementById('main'))