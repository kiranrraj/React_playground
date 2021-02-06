class App extends React.Component{
    render(){
        return(
            <Greet to="World" from="Kiran"/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));